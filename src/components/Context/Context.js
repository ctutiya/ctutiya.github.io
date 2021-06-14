import React from 'react'

const apiKey = 'bf2ab7434f1583f2e87f12808e45b585'

const cityDefault = 'Vancouver, CA'

// const unitsStandard = 'standard' // Temperature in Kelvin
const unitsMetric = 'metric' // Temperature in Celsius
const unitsImperial = 'imperial' // Temperature in Fahrenheit

const unitsMetricTemp = 'C'
const unitsMetricWindSpeed = 'm/s'
const unitsImperialTemp = 'F'
const unitsImperialWindSpeed = 'mph'

const Context = React.createContext()

export default class Provider extends React.Component {
    state = {
        cityId: '',
        cityFullName: '',
        temperatureUnit: '',
        windSpeedUnit: '',
        currentWeather: [],
        oneCall: [],
        alerts: false,
        loading: true,
        refetchAPI: (cityID, metricID) => {
            this.showWeather(cityID, metricID)
        }
    }

    showWeather = async (cityID = cityDefault, metricID = unitsMetric) => {
        try {
            // Current Weather Data API
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityID}&units=${metricID}&appid=${apiKey}`)

            // check for response status
            if (response.status !== 200) {
                if (response.status === 404) throw Error(`City not found. To make search more precise put the city's name, comma, 2-letter country code (ISO3166).`)
                else throw Error(`Oops, something went wrong! (${response.status}: ${response.statusText})`)
            }

            const unitTemp = (metricID === unitsMetric) ? unitsMetricTemp : (metricID === unitsImperial) ? unitsImperialTemp : ''
            const unitWindSpeed = (metricID === unitsMetric) ? unitsMetricWindSpeed : (metricID === unitsImperial) ? unitsImperialWindSpeed : ''

            let data = await response.json()

            const cityFullName = `${data.name}, ${data.sys.country}`
            const cityLon = data.coord.lon
            const cityLat = data.coord.lat

            // One Call API
            const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly&units=${metricID}&appid=${apiKey}`)

            // check for response status
            if (response2.status !== 200) throw Error(`${response2.status}: ${response2.statusText}`)

            let data2 = await response2.json()

            // keep the first 5 items on the array
            data2.daily.splice(5)

            let alert = false

            // check for alerts
            if ('alerts' in data2) alert = true

            this.setState({
                cityId: cityID,
                cityFullName: cityFullName,
                temperatureUnit: unitTemp,
                windSpeedUnit: unitWindSpeed,
                currentWeather: data,
                oneCall: data2,
                alerts: alert,
                loading: false
            })
        }
        catch(err) {
            alert(err.message)
        }
    }

    componentDidMount() {
        this.showWeather()
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer