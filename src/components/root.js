/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Root Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React from 'react';

/* Custom Imports */
import Login from './Login/login-container';
import 'typeface-roboto';

const Root = () => (
    <div>
        <Login/>
    </div>
);

export default Root;