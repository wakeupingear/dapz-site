import { ReactChild, useState } from 'react';

import NavItem from './NavItem';

export default function NavBar() {
    const [isAdsOn, setAds] = useState(true && !localStorage.getItem("adFree"));

    return <div id="navBar" className='dropShadow'>
        <NavItem path="/projects">Projects</NavItem>
        <NavItem path="/patreon">Patreon</NavItem>
        <NavItem path="/merch">Merch</NavItem>
        <NavItem path="/extra">Extra</NavItem>
        <NavItem path="/contact">Contact</NavItem>
        <NavItem path="/about">About</NavItem>
        <NavItem path="/ads" className="navRight">
            {(!localStorage.getItem("adsDisabled")) ? "Turn off Ads" : "Turn on Ads"}
        </NavItem>
    </div>;
}
