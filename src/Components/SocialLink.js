import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faDiscord, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function SocialLink(props) {
    let classes = "socialLink";
    if ("className" in props) {
        classes += " " + props.className;
    }
    const linkMap = {
        "Instagram": faInstagram,
        "Twitter": faTwitter,
        "YouTube": faYoutube,
        "Discord": faDiscord,
        "Twitch": faTwitch
    }
    if (props.name === "corner") {
        return <div className="socialLink socialLinkCorner"></div>
    }
    else {
        return <a className={classes} target="_blank" href={props.link} rel="noreferrer">
            <FontAwesomeIcon icon={linkMap[props.name]} className="icon"/>
        </a>;
    }
}
