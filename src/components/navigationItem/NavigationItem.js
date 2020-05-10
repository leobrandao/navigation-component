import React from 'react';

import './NavigationItem.css'

const NavigationItem = ({label, section}) => {

    return(
        <li><a href={`/${section}`}>{label}</a></li>
    )

}

export default NavigationItem;