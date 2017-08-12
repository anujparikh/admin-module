/******************************************************************
 * Author: Anuj Parikh
 * Description: Application Login Component
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet({
    grid: {
        marginTop: '2rem'
    },
    input: {
        width: '56%',
        marginTop: '2rem'
    }
});

const Login = (props) => {
    return (
        <Grid container
              className={props.classes.grid}
              direction="column"
              justify="center"
              align="center"
        >
            <TextField
                className={props.classes.input}
                required
                id="required"
                label="Username"
                margin="normal"
            />
            <TextField
                className={props.classes.input}
                required
                id="required"
                label="Password"
                type="password"
                margin="dense"
            />
        </Grid>
    );
};

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Login);