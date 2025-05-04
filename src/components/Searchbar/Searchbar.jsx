import React from "react";
import "./Searchbar.css";

function Searchbar(props) {
    return (
        <div className="searchbar">
            <input 
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={(event) => props.handleTyping(event.target.value)}
            />
        </div>
    )
}

export default Searchbar;