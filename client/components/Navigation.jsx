import React from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink to='/' className="navbar-brand">ReactWeather</NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/weather">GetWeather <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/examples">Examples</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-2 my-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/itch96">itch96 - itch96.github.io</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;