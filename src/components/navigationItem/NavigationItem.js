import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './NavigationItem.css'

const NavigationItem = ({label, id, className, handleClick}) => {

    const spanRef = useRef(null);
  
    return(
        <li className='App-navbar-item'>
            <a href={`#${id}`} className={className} onClick={() => handleClick(spanRef.current)}><span id={id} ref={spanRef}>{label}</span></a>
        </li>
    )

}

NavigationItem.propTypes = {
    id: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default NavigationItem;