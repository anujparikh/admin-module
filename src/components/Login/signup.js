/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Signup Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet({
    grid: {
        marginTop: '2rem'
    },
    input: {
        width: '56%',
        marginTop: '2rem'
    },
    btn: {
        marginTop: '2rem'
    }
});


const Signup = (props) => {
    return (
        <Grid
            container
            className={props.classes.grid}
            direction="column"
            justify="center"
            align="center"
        >
            <TextField
                className={props.classes.input}
                required
                id="required"
                label="First Name"
                margin="normal"
            />
            <TextField
                className={props.classes.input}
                required
                id="required"
                label="Last Name"
                margin="dense"
            />
            <TextField
                className={props.classes.input}
                required
                id="required"
                label="Email"
                type="email"
                margin="dense"
            />
            <TextField
                className={props.classes.input}
                required
                id="required"
                label="Phone No"
                margin="dense"
            />
            <Button
                raised
                className={props.classes.btn}
            >
                Register
            </Button>
        </Grid>
    );
};

Signup.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Signup);