import React,{useState} from 'react';
import { FeaturesItem } from './FeaturesItem';
import FeaturesMeetings from '../../img/FeaturesMeetings.png';
import FeaturesWebinar from '../../img/FeaturesWebinar.png';
import FeaturesConference from '../../img/FeaturesConference.png';
import FeaturesPhone from '../../img/FeaturesPhone.png';
import FeaturesMarketplace from '../../img/FeaturesMarketplace.png';


export const Features = () => {
    const [data, setData] = useState([
        {
            icon: FeaturesMeetings,
            alt:"meetings-and-chat",
            description:"Set up quick and easy video conferencing and chat, with maximum security and encryption that protects your data and privacy.",
            title:"Secure Online Meetings"

        },
        {
            icon: FeaturesWebinar,
            alt:"business-webinars",
            description:"Host private or public online events with a large amount of participants.",
            title:"Business Webinars"
        },
        {
            icon: FeaturesPhone,
            alt:"private-messaging-video-chat",
            description:"Fully secure and confidential video or text conferences that are easy to join or create.",
            title:"Private messaging and video chat"
        },
        {
            icon: FeaturesConference,
            alt:"team-collaboration",
            description:"Maintains team connectedness through safe and private messaging, calling and file sharing.",
            title:"Team Collaboration"
        },
    ])
    return (
        <div className="features">
            <h2 className="h2 fw-500 p-5 m-0 text-center">Features</h2>
            <div className="features-container d-flex justify-content-center text-center col-8 col-sm-10 col-md-8 col-lg-12 col-xl-10 row mx-auto ">
                {data.map(item=>{
                    return(
                        <FeaturesItem
                        icon={item.icon}
                        alt={item.alt}
                        description={item.description}
                        title={item.title}
                    />
                    )
                })}
            </div>
        </div>
    )
}
