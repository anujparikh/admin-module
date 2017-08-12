/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Login Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

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
        marginLeft: '16%'
    }
}));

class Login extends Component {
    state = {
        rememberMeChecked: false
    };

    handleChange = name => (event, checked) => {
        this.setState({[name]: checked});
    };

    render() {
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
                    <Grid
                        className={this.props.classes.rememberMeGrid}
                        container
                        spacing={40}
                    >
                        <Grid item xs={2}/>
                        <Grid item xs={6}>
                            <Grid
                                container
                                justify="center"
                                align="center"
                            >
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={this.state.rememberMeChecked}
                                        onChange={this.handleChange('rememberMeChecked')}
                                        value="rememberMeChecked"
                                    />}
                                    label="Remember me"
                                />
                                <Button
                                    raised
                                    className={this.props.classes.loginBtn}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </FormGroup>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Login);