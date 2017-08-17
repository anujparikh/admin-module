/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Routes Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Custom Imports */
import Login from './login/login-container';
import Home from './home/home';
import User from './users/users';
import Roles from './roles/roles';

const Routes = () => (
    <div>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/users" component={User}/>
                    <Route path="/roles" component={Roles}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        </Router>
    </div>
);

export default Routes;