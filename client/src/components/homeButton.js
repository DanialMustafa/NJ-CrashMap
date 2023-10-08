import React from 'react';
import { SButton } from './styles';

const homeButton = () => {
    return (
        <div>
            <SButton onClick={() => {window.location.href = "/"}}/>
        </div>
    )
}

export default homeButton;