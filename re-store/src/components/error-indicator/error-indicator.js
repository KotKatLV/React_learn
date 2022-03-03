import React from 'react';

import icon from './error-icon.png'
import './error-indicator.css';

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <img scr={icon} alt="error"/>
        </div>
    )
}

export default ErrorIndicator;