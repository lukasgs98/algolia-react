import React from "react";

function ListItem (props) {
    return <li key={props.id} onClick={props.onClick}>{props.textContent}</li>
};

export default ListItem;