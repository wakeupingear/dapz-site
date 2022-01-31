import React from 'react';

import { useNavigate } from "react-router-dom";

export default function NavItem(props) {
    //const navigate = useNavigate();
    const process = () => {
        //navigate.pushState({ page: navigate.page+1 }, 'JavaScript', '/javascript/');
    }

    let classes = "navItem";
    if (props) classes += " " + props.className;

    return <div onClick={process} className={classes + ((window.location.pathname === props.path)?" navCurrent":"")}>
        {props.children}
    </div>;
}
