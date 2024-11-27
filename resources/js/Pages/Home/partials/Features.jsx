import React from "react";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';


export default function Features() {
    const features = [
        {
            name: "Free Delivery",
            description: "Free shipping on all order",
            icon: <LocalShippingOutlinedIcon fontSize="large"/>,
        },
        {
            name: "Online support 24/7",
            description: "Support online 24 hours a day",
            icon: <SupportAgentOutlinedIcon fontSize="large"/>,
        },
        {
            name: "Money return",
            description: "Back guarantee under 7 days",
            icon: <CurrencyExchangeOutlinedIcon fontSize="large"/>,
        },
        {
            name: "Member discount",
            description: "Onevery order over $120.00",
            icon: <CardGiftcardOutlinedIcon fontSize="large"/>,
        },
    ];
    return (
        <div className="flex flex-row gap-4 my-10  justify-around w-full">
            {features.map((item, index) => (
                <FeaturesItem key={index} item={item} />
            ))}
        </div>
    );
}

function FeaturesItem({ item }) {
    return (
        <div className="flex">
            <div className="text-rose-500 me-4">{item.icon}</div>
            <div>
                <h4 className="text-2xl font-bold">{item.name}</h4>
                <p>{item.description}</p>
            </div>
        </div>
    );
}
