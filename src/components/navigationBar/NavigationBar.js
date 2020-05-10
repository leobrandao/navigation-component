import React, { Component } from 'react';
import NavigationItem from '../navigationItem/NavigationItem'

import './NavigationBar.css'

class NavigationBar extends Component {

    // probably will need state to handle current selected item and undelineBar data
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        const { navigationData } = this.props;
        return(
            <ul>
                {navigationData.map(item => ( 
                    <NavigationItem 
                        label={item.label}
                        key={item.section}
                        section={item.section}
                    /> 
                ))}
            </ul>
        )
    }

}

export default NavigationBar;