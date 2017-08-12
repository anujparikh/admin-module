/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Login Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PersonAdd from 'material-ui-icons/PersonAdd';
import VerifiedUser from 'material-ui-icons/VerifiedUser';

import Login from './login';

const styleSheet = createStyleSheet(theme => ({
    labelContainer: {
        fontSize: theme.typography.headline
    }
}));

class LoginContainer extends Component {
    state = {
        index: 0,
    };

    handleChange = (event, index) => {
        this.setState({index});
    };

    render() {
        return (
            <Grid container spacing={40}>
                <Grid item md={3} lg={3} xl={3}/>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <AppBar position="static" color="default">
                        <Tabs
                            index={this.state.index}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                            centered
                        >
                            <Tab
                                classes={{labelContainer: this.props.classes.labelContainer}}
                                label="Login"
                                icon={<VerifiedUser/>}
                                fullWidth
                            />
                            <Tab
                                classes={{labelContainer: this.props.classes.labelContainer}}
                                label="Sign up"
                                icon={<PersonAdd/>}
                                fullWidth
                            />
                        </Tabs>
                    </AppBar>
                    {this.state.index === 0 &&
                    <Login>
                        {'Item One'}
                    </Login>}
                </Grid>
            </Grid>
        );
    }
}

LoginContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(LoginContainer);