import React from 'react';
import { ReactComponent as DownloadingIcon } from '../assets/icons/downloading_icon.svg';

const Downloading = () => {
    return (
        <div className='downloadingContainer'>
            <div className='downloadingImg'>
                <DownloadingIcon />
            </div>
            <h2 className='downloadingText'>downloading data from the server...</h2>
        </div>
    );
}

export default Downloading;