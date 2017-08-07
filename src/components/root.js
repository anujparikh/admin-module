/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Root Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React from 'react';

/* Custom Imports */
import Nav from './common/navigation-bar';

const Root = () => (
    <div className="container-fluid c-mt-lg">
        <Nav />
    </div>
);

export default Root;