/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Login Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormGroup } from 'material-ui/Form';
import { Redirect } from 'react-router-dom';

const styleSheet = createStyleSheet(() => ({
    grid: {
        marginTop: '2rem'
    },
    input: {
        width: '56%',
        marginTop: '2rem'
    },
    rememberMeGrid: {
        marginTop: '0.3rem',
    },
    loginBtn: {
        margin: '3.3rem 3.3rem'
    }
}));

class Login extends Component {

    constructor() {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    state = {
        homeRedirect: false
    };

    handleOnClick = () => {
        this.setState({
            homeRedirect: true
        });
    };

    render() {
        if (this.state.homeRedirect) {
            return <Redirect push to="/home"/>;
        }
        return (
            <FormGroup>
                <Grid container
                      className={this.props.classes.grid}
                      direction="column"
                      justify="center"
                      align="center"
                >
                    <TextField
                        className={this.props.classes.input}
                        required
                        id="required"
                        label="Username"
                        margin="normal"
                    />
                    <TextField
                        className={this.props.classes.input}
                        required
                        id="required"
                        label="Password"
                        type="password"
                        margin="dense"
                    />
                    <Button
                        raised
                        color="primary"
                        className={this.props.classes.loginBtn}
                        onClick={this.handleOnClick}
                    >
                        Submit
                    </Button>
                </Grid>
            </FormGroup>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Login);