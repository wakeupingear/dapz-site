import React from 'react';

export default function NavItem(props) {
    const process = () => {
        if (props.path === "/patreon") {
            window.open("https://www.patreon.com/dapz", "_blank");
        }
        else if (props.path === "/ads") {
            localStorage.setItem("adsDisabled", (!localStorage.getItem("adsDisabled")));
            window.location.reload();
        }
        else {
            window.open(props.path, "_self");
            //navigate.pushState({ page: navigate.page+1 }, 'JavaScript', '/javascript/');
        }
    }

    let classes = "navItem";
    if (props) classes += " " + props.className;

    return <div onClick={process} className={classes + ((window.location.pathname === props.path) ? " navCurrent" : "")}>
        {props.children}
    </div>;
}
