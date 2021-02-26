import React from 'react';
export const FeaturesItem = (props) => {
    return (
        <div className="features-item col-12 col-sm-6 col-lg-2 mt-3 mt-md-0 ">
            <div className="features-item-top">
                <div className="features-item-top-icon d-flex justify-content-center align-items-center">
                    <img
                        src={props.icon}
                        alt={props.alt}
                    />
                </div>
                <p className="p3">{props.description}</p>
            </div>
            <div className="mt-4">
                <p className="p1 fw-500">{props.title}</p>
                {/*  <a href={props.link} className="p1 c-blue fw-500">Learn More</a> */}
            </div>
        </div>
    )
}
