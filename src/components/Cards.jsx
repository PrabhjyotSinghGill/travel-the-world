import React from 'react';
import "../views/Cards.css";
import CardItem from "./CardItem.jsx";
import i9 from "../images/i9.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";
import i8 from "../images/i8.jpg";

function Cards(){
    return <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src={i9} text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/services"></CardItem>
                    <CardItem src={i2} text="Travel through the islands of Bali in a Private Cruise" label="Luxury" path="/services"></CardItem>
                </ul>
                <ul className="cards__items">
                    <CardItem src={i3} text="Set Sail in the Atlantic Ocean visiting Uncharted Waters" label="Mystery" path="/services"></CardItem>
                    <CardItem src={i4} text="Experience Football on Top of the Himalayan Mountains" label="Adventure" path="/products"></CardItem>
                    <CardItem src={i8} text="Ride through the Sahara Desert on a guided Camel tour" label="Adrenaline" path="/sign-up"></CardItem>
                </ul>
            </div>
        </div>
    </div>
}

export default Cards