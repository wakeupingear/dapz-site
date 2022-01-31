import React from 'react';

import SocialLink from './SocialLink';

export default function Banner() {
    return <div id="banner">
        <div id="bannerName" className='dropShadow'>Dapz's Site</div>
        <div id="socials">
            <SocialLink name="YouTube" link="https://www.youtube.com/c/Dapz1" />
            <SocialLink name="Discord" link="https://www.youtube.com/c/Dapz1" />
            <SocialLink name="Twitter" link="https://www.youtube.com/c/Dapz1" />
        </div>
    </div>;
}
