import React from 'react'

import { Consumer } from '../Context/Context'

const ContentAlert = () => {
    return (
        <Consumer>
            {value => (
                <div className="col-12 alert-column">
                    {!value.loading
                    ?
                        value.alerts
                        ?
                            (
                                <div className="column-container">
                                    <div className="column-title">
                                        <h2>{value.oneCall.alerts[0].event}</h2>
                                    </div>

                                    <div className="column-content">
                                        <div className="column-content-text">
                                            <p><span className="fw-bold">Sender:</span> {value.oneCall.alerts[0].sender_name}</p>
                                            <p><span className="fw-bold">Start date:</span> {new Date(value.oneCall.alerts[0].start * 1000).toLocaleString('en-us', {month: "short", day: "2-digit", hour: '2-digit', minute: '2-digit'})}</p>
                                            <p><span className="fw-bold">End date:</span> {new Date(value.oneCall.alerts[0].end * 1000).toLocaleString('en-us', {month: "short", day: "2-digit", hour: '2-digit', minute: '2-digit'})}</p>
                                            <br />
                                            <p>{value.oneCall.alerts[0].description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        :
                            (
                                <div className="column-container">
                                    <div className="column-title">
                                        <h2>Alerts</h2>
                                    </div>

                                    <div className="column-content">
                                        <div className="column-content-text">
                                            <p>There are no alerts for the region!</p>
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

export default ContentAlert