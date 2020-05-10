import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavigationItem from '../navigationItem/NavigationItem'

import './NavigationBar.css'

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slidePosition: {
                left: 0,
                width: 0
            },
            selectedItem: ''
        };
    }

    handleClick = span => {
        this.setState({
            slidePosition: {
                left: span.offsetLeft,
                width: span.offsetWidth
            },
            selectedItem: span.id
        })
    }

    getMenuClass = ({ section }) => {
        return this.state.selectedItem === section ? 'selected' : ''; 
    }

    render() {
        const { navigationData } = this.props;
        return navigationData && (
            <nav className="App-navbar">
                <ul className="App-navbar-container">
                    {navigationData.map(city => ( 
                        <NavigationItem 
                            label={city.label}
                            key={city.section}
                            id={city.section}
                            className={this.getMenuClass(city)}
                            handleClick={this.handleClick}
                        /> 
                        ))}
                </ul>
                <SlideBar slidePosition={this.state.slidePosition} />
            </nav>
        )
    }
}

NavigationBar.propTypes = {
    navigationData: PropTypes.array.isRequired
}

const SlideBar = ({slidePosition}) => (
    <div className="App-navbar-underline-container">
        <span className="App-navbar-underline" style={slidePosition}></span>
    </div>
)

export default NavigationBar;