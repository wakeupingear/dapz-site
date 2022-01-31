import { ReactChild, useState } from 'react';

import NavItem from './NavItem';

export default function NavBar() {
    const [isAdsOn, setAds] = useState(true && !localStorage.getItem("adFree"));

    return <div id="navBar" className='dropShadow'>
        <NavItem path="/projects">Projects</NavItem>
        <NavItem path="/patreon">Patreon</NavItem>
        <NavItem path="/merch">Merch</NavItem>
        <NavItem path="/extra">Extra</NavItem>
        <NavItem path="/patreon">Contact</NavItem>
        <NavItem path="/about">About</NavItem>
        {(isAdsOn) ? <NavItem path="/ads" className="navRight">Turn Off Ads</NavItem> : null}
    </div>;
}
