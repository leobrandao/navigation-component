import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./NavigationItem.css";

const NavigationItem = ({ label, section, className, handleClick }) => {
  const spanRef = useRef(null);

  return (
    <li className="App-navbar-item">
      <a
        href={`#${section}`}
        className={className}
        onClick={() => handleClick(spanRef.current, section)}
      >
        <span ref={spanRef}>{label}</span>
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  section: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavigationItem;
