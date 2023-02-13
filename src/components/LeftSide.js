import React from "react";
import plantimg from "../Images/plant.png";
import '../App.css';



function LeftSide(){
    return(
        <>
        <h2 className="left-h2">Welcome back,</h2>
        <img className="left-image" src={plantimg} alt="Plant.jpg"></img>
     
        </>
    )
}

export default LeftSide;