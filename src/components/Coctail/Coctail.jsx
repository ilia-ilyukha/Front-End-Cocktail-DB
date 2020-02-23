import React from "react";

function Coctail(props) {
    return (       
        <div className="coctail-div">
            <img src={props.img} className="cocktail-img" alt=""/>
            <span> {props.name}</span>
        </div>
    );
  }

export default Coctail;