import React from 'react'

import ContentBanner from './ContentBanner'
import ContentMain from './ContentMain'
import ContentDetail from './ContentDetail'
import ContentDaily from './ContentDaily'
import ContentAlert from './ContentAlert'

const Content = () => {
    return (
        <div className="main">
            <section className="sec-advertisment">
                <div className="container">
                    <ContentBanner
                        sidebar={false}
                        image="https://s0.2mdn.net/8015881/TELGH9448_Q121_HS_WholeHome_Bundle_Updates_Digital_IAB_728x90_vf.jpg"
                    />
                </div>
            </section>

            <section className="sec-main">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col content">
                            <div className="row">
                                <ContentMain />
                            </div>

                            <div className="row">
                                <ContentDetail />
                            </div>

                            <div className="row">
                                <ContentDaily />
                            </div>
                        </div>

                        <div className="col-auto sidebar">
                            <ContentBanner
                                sidebar={true}
                                image="https://tpc.googlesyndication.com/simgad/3485860487660447482"
                            />

                            <div className="row">
                                <ContentAlert />
                            </div>

                            <ContentBanner
                                sidebar={true}
                                image="https://media.bidr.io/districtm/64/226/2576_buttandco_st-vpat2021_300x250.jpg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content