import React from 'react';
import "../App.css";
import {Button} from "./Buttons";
import "../views/HeroSection.css";
import vid1 from "../videos/v3.mp4";
function HeroSection(){
    return (
      <div className="hero-container">
        <video autoPlay loop muted>
            <source src={vid1} type="video/mp4"></source>
        </video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                GET STARTED
            </Button>
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                WATCH TRAILER <i className="far fa-play-circle"></i>
            </Button>
        </div>
      </div>
    )
}
export default HeroSection