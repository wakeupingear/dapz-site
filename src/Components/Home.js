import { React, useState } from 'react';

import Ad from './Ad';

export default function Home() {
    const [isAdsOn, setAds] = useState(true);

    return <div id="homePage">
        <a id="profilePic" className='dropShadow' href="https://willfarhat.com/projects" target="_blank" rel='noreferrer'>
            <img src='https://yt3.ggpht.com/ytc/AKedOLQivVkMnUMPaXfFRFL6BbuMozHKFw_OislHuIhBbw=s88-c-k-c0x00ffffff-no-rj' alt="God"></img>
        </a>
        <div>
            <div className="leftText">
                <h1>I AM DAPZ</h1>
                <h2>Welcome to my site.</h2>
                <h2>Feel free to look around and such...</h2>
                <h2>This is for my main Channel</h2>
            </div>
        </div>
        <Ad />
    </div>;
}
