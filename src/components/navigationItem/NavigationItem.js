import React from 'react';

import './NavigationItem.css'

const NavigationItem = ({label, section, handleClick}) => {

    return(
        <li className='App-navbar-item'>
            <a href={`/${section}`} onClick={handleClick(section)}><span id={`label-${section}`}>{label}</span></a>
        </li>
    )

}

export default NavigationItem;