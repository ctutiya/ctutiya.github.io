import React from 'react'

import { Consumer } from '../Context/Context'

const ContentDaily = () => {
    return (
        <Consumer>
            {value => (
                <div className="col-12 daily-column">
                    {!value.loading
                    ?
                        (
                            <div className="column-container">
                                <div className="column-title">
                                    <h2>Daily forecast</h2>
                                </div>

                                <div className="column-content">
                                    <div className="column-content-text-forecast">
                                        {value.oneCall.daily.map((daily, index) => (
                                            <div className="forecast-item text-center" key={index}>
                                                <p className="fw-bold">{index !== 0 ? new Date(daily.dt * 1000).toLocaleDateString('en-us', {weekday: "short"}) + ' ' + new Date(daily.dt * 1000).toLocaleDateString('en-us', {day: "2-digit"}) : 'Today'}</p>
                                                <p className="temperature">{Math.round(daily.temp.max)} / {Math.round(daily.temp.min)}&deg;{value.temperatureUnit}</p>
                                                <img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt={daily.weather[0].description} />
                                                <p className="description">{daily.weather[0].description}</p>
                                            </div>
                                        ))}
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

export default ContentDaily