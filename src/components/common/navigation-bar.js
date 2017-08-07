/******************************************************************
* Author: Anuj Parikh
* Description: Component for Navigation Bar
* Type: React Functional Component
*******************************************************************/

/* Dependency Imports */
import React from 'react';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Roles <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">Access</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">User Name</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;