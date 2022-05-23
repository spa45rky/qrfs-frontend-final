import React from "react";

export const SmallCard = (props) => {

    const graphic = props.graphic || null
    const text = props.text || "TEXT"

    return(
        <div className="small-card-container">
            <img src={graphic} className="small-card-img"/>
            <p className="small-card-text">{text}</p>
        </div>
    )
}