import { React, useState } from 'react';

export default function Ad() {
    //https://stackoverflow.com/questions/46035999/how-to-embed-google-adsense-in-react-js
    const [isAdsOn, setAds] = useState(false&&!localStorage.getItem("adFree"));
    return <div>
        {(isAdsOn) ?
            <div className='ad'>
                adfsadf
                <ins className='adsbygoogle'
                    style={{ display: 'block' }}
                    data-ad-client='ca-pub-12121212'
                    data-ad-slot='12121212'
                    data-ad-format='auto' />
            </div>
            : null}
    </div>
}
