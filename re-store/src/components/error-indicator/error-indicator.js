import React from 'react';

import './error-indicator.css';
import icon from './error-icon.png'

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <img scr={icon} alt="error"/>
        </div>
    )
}

export default ErrorIndicator;