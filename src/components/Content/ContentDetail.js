import React from 'react'

import { Consumer } from '../Context/Context'

const ContentDetail = () => {
    return (
        <Consumer>
            {value => (
                <div className="col-12 detail-column">
                    {!value.loading
                    ?
                        (
                            <div className="column-container">
                                <div className="column-title">
                                    <h2>Weather today in {value.cityFullName}</h2>
                                </div>

                                <div className="column-content">
                                    <div className="column-content-text-period">
                                        <div className="period-item text-center"><p className="fw-bold">Morning</p><p className="temperature">{Math.round(value.oneCall.daily[0].temp.morn)}&deg;{value.temperatureUnit}</p><p className="feels-like">(feels like {Math.round(value.oneCall.daily[0].feels_like.morn)}&deg;{value.temperatureUnit})</p></div>
                                        <div className="period-item text-center"><p className="fw-bold">Afternoon</p><p className="temperature">{Math.round(value.oneCall.daily[0].temp.day)}&deg;{value.temperatureUnit}</p><p className="feels-like">(feels like {Math.round(value.oneCall.daily[0].feels_like.day)}&deg;{value.temperatureUnit})</p></div>
                                        <div className="period-item text-center"><p className="fw-bold">Evening</p><p className="temperature">{Math.round(value.oneCall.daily[0].temp.eve)}&deg;{value.temperatureUnit}</p><p className="feels-like">(feels like {Math.round(value.oneCall.daily[0].feels_like.eve)}&deg;{value.temperatureUnit})</p></div>
                                        <div className="period-item text-center"><p className="fw-bold">Night</p><p className="temperature">{Math.round(value.oneCall.daily[0].temp.night)}&deg;{value.temperatureUnit}</p><p className="feels-like">(feels like {Math.round(value.oneCall.daily[0].feels_like.night)}&deg;{value.temperatureUnit})</p></div>
                                    </div>

                                    <div className="column-content-text-detail">
                                        <p className="detail-item"><span className="fw-bold">wind</span><span> {value.oneCall.current.wind_speed} {value.windSpeedUnit}</span></p>
                                        <p className="detail-item"><span className="fw-bold">pressure</span><span> {value.oneCall.current.pressure} hPa</span></p>
                                        <p className="detail-item"><span className="fw-bold">humidity</span><span> {value.oneCall.current.humidity}%</span></p>
                                        <p className="detail-item"><span className="fw-bold">uv</span><span> {Math.round(value.oneCall.current.uvi)}</span></p>
                                        <p className="detail-item"><span className="fw-bold">sunrise</span><span> {new Date(value.oneCall.current.sunrise * 1000).toLocaleString('en-us', {hour: '2-digit', minute: '2-digit'})}</span></p>
                                        <p className="detail-item"><span className="fw-bold">sunset</span><span> {new Date(value.oneCall.current.sunset * 1000).toLocaleString('en-us', {hour: '2-digit', minute: '2-digit'})}</span></p>
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

export default ContentDetail