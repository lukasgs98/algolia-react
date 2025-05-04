import React from "react";
import "./Searchbar.css";

function Searchbar(props) {
    return (
        <div className="searchbar">
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default Searchbar;