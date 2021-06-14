import React, {useState} from 'react'

import { Consumer } from '../Context/Context'
import { BsSearch } from "react-icons/bs"

const Header = () => {
    const [metric, setMetric] = useState('metric')

    const handleSubmit = (event, refetchAPI) => {
        event.preventDefault()

        const cityId = event.target.txtSearch.value

        refetchAPI(cityId, metric)
    }

    const handleChange = (event, refetchAPI, cityId) => {
        let selItem = event.target.value

        refetchAPI(cityId, selItem)
        setMetric(selItem)
    }

    return (
        <Consumer>
            {value => (
                <header>
                    <nav className="navbar navbar-light terciary-bg-color">
                        <div className="container-fluid">
                            <a href="/" className="navbar-brand">The Weather App</a>

                            <form className="d-flex form-search" onSubmit={(event) => handleSubmit(event, value.refetchAPI)}>
                                <div className="input-group">
                                    <div className="form-floating">
                                        <input id="txt-search" name="txtSearch" type="text" className="form-control form-control-sm" placeholder="search for location" aria-label="search" aria-describedby="" defaultValue={value.cityId} />
                                        <label htmlFor="txt-search">search for location</label>
                                    </div>
                                    <button id="btn-search" className="btn btn-outline-secondary btn-sm" type="button"><BsSearch /></button>
                                </div>                        
                            </form>

                            <form className="d-flex form-metric">
                                <div className="form-floating">
                                    <select defaultValue={metric} id="sel-metric" className="form-select form-select-sm" aria-label="" onChange={(event) => handleChange(event, value.refetchAPI, value.cityId)}>
                                        <option value="metric">&deg;C, m/s</option>
                                        <option value="imperial">&deg;F, mph</option>
                                    </select>
                                    <label htmlFor="sel-metric">select metric</label>
                                </div>
                            </form>
                        </div>
                    </nav>
                </header>
            )}
        </Consumer>
    )
}

export default Header