import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function SocialLink(props) {
    const linkMap = {
        "Instagram": faInstagram,
        "Twitter": faTwitter,
        "YouTube": faYoutube,
        "Discord": faDiscord,
    }

    return <a className="socialLink" target="_blank" href={props.link} rel="noreferrer">
        <FontAwesomeIcon icon={linkMap[props.name]} />
    </a>;
}
