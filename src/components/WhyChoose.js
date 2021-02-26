import React from 'react'
import WhyChooseI from '../img/WhyChooseI.png'

export const WhyChoose = () => {
    return (
        <div className="whychoose py-5">
            <div className="d-flex justify-content-between align-items-center col-12 col-md-10 col-lg-9 mx-auto row ">
                <div className="col-12 d-flex justify-content-center col-md-6">
                    <img className="whychoose-lap" src={WhyChooseI} />
                </div>
                <div className="whychoose-right col-12 col-md-6 mt-5 mt-md-0">
                    <h2 className="h2 fw-700 c-white ">Why choose ySign BIZ</h2>
                    <p className="p1 col-10 col-md-12 mx-auto p-0 fw-500 c-white pt-3">We maintain our core values by focusing on the security and privacy of user and company data. We believe that all private information should remain in full control of the owner, with no third party or middle man having access to it. ySign BIZ is fully committed to this belief by utilizing the latest secure encryption and decentralized technology to fully secure and protects your data and privacy.</p>
                    <div className="">
                        <button className="whychoose-btn border-0 c-white p1">
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

