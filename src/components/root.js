/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Root Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React from 'react';

/* Custom Imports */
import AdminNavBar from './common/admin-navbar';
import 'typeface-roboto';

const Root = () => (
    <div>
        <AdminNavBar/>
    </div>
);

export default Root;