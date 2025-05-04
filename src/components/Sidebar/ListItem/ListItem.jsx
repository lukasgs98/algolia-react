import React from "react";

function ListItem (props) {
    return <li key={props.id} value={props.value} onClick={() => props.onClick(props.value)}>{props.textContent}</li>
};

export default ListItem;