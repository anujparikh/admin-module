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
import Card from 'material-ui/Card';
import PersonAdd from 'material-ui-icons/PersonAdd';
import VerifiedUser from 'material-ui-icons/VerifiedUser';

/* Custom Imports */
import Login from './login';
import Signup from './signup';

const styleSheet = createStyleSheet(theme => ({
    labelContainer: {
        fontSize: theme.typography.headline
    },
    card: {
        width: '40%',
        marginLeft: '30%',
        marginTop: '7%'
    },
    cardContainer: {
        textAlign: 'center'
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
            <div>
                <Card
                    className={this.props.classes.card}
                    raised
                >
                    <Grid container spacing={40}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                            <Login/>}
                            {this.state.index === 1 &&
                            <Signup/>}
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}

LoginContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(LoginContainer);