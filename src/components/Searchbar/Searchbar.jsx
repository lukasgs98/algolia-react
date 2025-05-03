import React from "react";

function Searchbar(props) {
    return (
        <div class="searchbar">
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default Searchbar;