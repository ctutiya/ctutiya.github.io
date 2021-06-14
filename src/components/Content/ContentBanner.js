import React from 'react'

const ContentBanner = (props) => {
    return (
        <div className="row">
            {props.sidebar
            ?
                <div className="col-12">
                    <div className="column-container">
                        <img src={props.image} alt="" />
                    </div>
                </div>
            :
                <div className="col-12 text-center">
                    <img src={props.image} alt="" />
                </div>
            }
        </div>
    )
}

export default ContentBanner