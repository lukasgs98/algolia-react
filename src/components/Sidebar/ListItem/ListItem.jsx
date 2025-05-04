import React from "react";

function ListItem (props) {
    return (
        <li key={props.id} className={props.className} value={props.value} onClick={() => props.onClick(props.value)}>{props.textContent}</li>
    );
};

export default ListItem;