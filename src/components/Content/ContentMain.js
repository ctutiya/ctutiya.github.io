import React from 'react'

import { Consumer } from '../Context/Context'

const ContentMain = () => {
    return (
        <Consumer>
            {value => (
                <div className="col-12 main-column">
                    {!value.loading
                    ?
                        (
                            <div className="column-container">
                                <div className="column-title">
                                    <h2>{value.currentWeather.name}, {value.currentWeather.sys.country}</h2>
                                    <p className="date-time">{new Date(value.currentWeather.dt * 1000).toLocaleString('en-us', {month: "short", day: "2-digit", hour: '2-digit', minute: '2-digit'})}</p>
                                </div>

                                <div className="column-content">
                                    <div className="column-content-text">
                                        <p className="temperature">{Math.round(value.currentWeather.main.temp)}&deg;{value.temperatureUnit}</p>
                                        <p className="description">{value.currentWeather.weather[0].description}</p>
                                    </div>

                                    <div className="column-content-image">
                                        <img src={`http://openweathermap.org/img/wn/${value.currentWeather.weather[0].icon}@2x.png`} alt={value.currentWeather.weather[0].description} />
                                        <p className="temp-min-max text-center">{Math.round(value.currentWeather.main.temp_min)} / {Math.round(value.currentWeather.main.temp_max)}&deg;{value.temperatureUnit}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    :
                        ''
                    }
                </div>
            )}
        </Consumer>
    )
}

export default ContentMain