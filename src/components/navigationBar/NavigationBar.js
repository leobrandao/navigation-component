import React, { Component } from 'react';
import NavigationItem from '../navigationItem/NavigationItem'

import './NavigationBar.css'

class NavigationBar extends Component {

    // probably will need state to handle current selected item and undelineBar data
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    handleClick = section => e => {
        e.preventDefault();
        e.stopPropagation();
        const el = document.getElementById(`label-${section}`);
        const left = el.offsetLeft;
        const width = el.offsetWidth;
        console.log(left, width);
    }

    render() {
        const { navigationData } = this.props;
        return(
            <nav className='App-navbar'>
                <ul className="App-navbar-container">
                    {navigationData.map(item => ( 
                        <NavigationItem 
                        label={item.label}
                        key={item.section}
                        section={item.section}
                        handleClick={this.handleClick}
                        /> 
                        ))}
                </ul>
            </nav>
        )
    }

}

export default NavigationBar;