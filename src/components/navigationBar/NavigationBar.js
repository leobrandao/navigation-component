import React, { Component } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import NavigationItem from "../navigationItem/NavigationItem";

import "./NavigationBar.css";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      slidePosition: {
        left: 0,
        width: 0,
      },
      selectedItem: null,
      selectedCity: "",
      resizing: false,
    };
    this.enableTransition = debounce(() => {
      this.setState({
        resizing: false,
      });
    }, 200);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  setSlidePosition = (slideBar) => {
    this.setState({
      slidePosition: {
        left: slideBar.offsetLeft,
        width: slideBar.offsetWidth,
      },
    });
  };

  handleClick = (span, section) => {
    this.setSlidePosition(span);
    this.setState({
      selectedItem: span,
      selectedCity: section,
    });
  };

  handleResize = () => {
    if (!this.state.resizing) {
      this.setState({
        resizing: true,
      });
    }
    const slideBar = this.state.selectedItem;
    slideBar && this.setSlidePosition(slideBar);
    this.enableTransition();
  };

  getMenuClass = (section) => {
    const { selectedCity } = this.state;
    return selectedCity === section ? "selected" : "";
  };

  render() {
    const { navigationData } = this.props;
    const resizeClass = this.state.resizing ? "resizing" : "";
    return (
      navigationData && (
        <nav className="App-navbar">
          <ul className={`App-navbar-container`}>
            {navigationData.map(({ label, section }) => (
              <NavigationItem
                label={label}
                key={section}
                section={section}
                className={this.getMenuClass(section)}
                handleClick={this.handleClick}
              />
            ))}
          </ul>
          <SlideBar
            className={resizeClass}
            slidePosition={this.state.slidePosition}
          />
        </nav>
      )
    );
  }
}

NavigationBar.propTypes = {
  navigationData: PropTypes.array.isRequired,
};

const SlideBar = ({ slidePosition, className }) => (
  <div className="App-navbar-underline-container">
    <span
      className={`App-navbar-underline ${className}`}
      style={slidePosition}
    ></span>
  </div>
);

export default NavigationBar;
