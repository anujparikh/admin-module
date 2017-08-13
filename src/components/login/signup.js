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
import { FormGroup } from 'material-ui/Form';

const styleSheet = createStyleSheet({
    grid: {
        marginTop: '2rem'
    },
    input: {
        width: '56%',
        marginTop: '2rem'
    },
    btn: {
        margin: '3.3rem 3.3rem'
    }
});


const Signup = (props) => {
    return (
        <FormGroup>
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
                    label="Username"
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
                    color="primary"
                    className={props.classes.btn}
                >
                    Register
                </Button>
            </Grid>
        </FormGroup>
    );
};

Signup.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Signup);