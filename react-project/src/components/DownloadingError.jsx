import React from 'react';
import { ReactComponent as DownloadingErrorIcon } from '../assets/icons/downloading_error_icon.svg';

const DownloadingError = () => {
    return (
        <div className='downloadingErrorContainer'>
            <div className='downloadingErrorImg'>
                <DownloadingErrorIcon />
            </div>
            <h2 className='downloadingErrorText'>the server is not responding. try again later.</h2>
        </div>
    );
}

export default DownloadingError;