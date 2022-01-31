import React from 'react';

import SocialLink from './SocialLink';

export default function Banner() {
    let homeURL = window.location.href.replace(window.location.pathname, "");
    return <div id="banner">
        {(window.location.pathname === "/")
            ? <div id="bannerName" className='dropShadow'>Dapz</div>
            : <a id="bannerName" className='dropShadow' href={homeURL} rel='noreferrer' target={"_self"}>Dapz's Site</a>
        }
        <div id="socials">
            <SocialLink name="Twitter" link="https://twitter.com/TheDapuma" />
            <SocialLink name="Instagram" link="https://www.instagram.com/dapumadapz/" />
            <SocialLink name="Discord" link="https://discord.com/invite/h6kWeN74rb" />
            <SocialLink name="Twitch" link="https://www.twitch.tv/actuallydapz" />
            <SocialLink name="YouTube" link="https://www.youtube.com/c/Dapz1" />
        </div>
    </div>;
}