import React from "react";
import logoimg from "./Images/logo.png";
import './App.css';
import Forms from "./Form";

function RightSide(){
    return(
        <>
    <img className="right-image" src={logoimg} alt="logo.png"></img>
    <Forms/>
    <span className="right-text">"Good health is testament of a full life"</span>
    </>
    )
}

export default RightSide;