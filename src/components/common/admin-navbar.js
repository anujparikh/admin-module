/******************************************************************
 * Author: Anuj Parikh
 * Description: Admin navigation bar Component
 * Type: React Class Component
 *******************************************************************/

/* Dependency Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import People from 'material-ui-icons/People';
import Settings from 'material-ui-icons/Settings';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Redirect } from 'react-router-dom';

const styleSheet = createStyleSheet({
    list: {
        width: 250,
        flex: 'initial',
    },
    listFull: {
        width: 'auto',
        flex: 'initial',
    },
});

class AdminNavBar extends Component {

    state = {
        open: {
            left: false
        },
        usersRedirect: false,
        rolesRedirect: false
    };

    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({
            open: drawerState,
            usersRedirect: this.state.usersRedirect,
            rolesRedirect: this.state.rolesRedirect
        });
    };

    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);

    handleClick = (key) => {
        let tempState = this.state;
        tempState[key] = true;
        this.setState(tempState);
    };

    render() {
        if (this.state.usersRedirect) {
            return <Redirect push to="/users"/>;
        }

        if (this.state.rolesRedirect) {
            return <Redirect push to="/roles"/>;
        }

        const navigationListItems = (
            <div>
                <ListItem button onClick={() => this.handleClick('usersRedirect')}>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    <ListItemText primary="Users"/>
                </ListItem>
                <ListItem button onClick={() => this.handleClick('rolesRedirect')}>
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Roles"/>
                </ListItem>
            </div>
        );

        const navigationList = (
            <div>
                <List className={this.props.classes.list}>
                    {navigationListItems}
                </List>
            </div>
        );

        return (
            <div>
                <Button onClick={this.handleLeftOpen}><i className="material-icons">view_list</i></Button>
                <Drawer
                    open={this.state.open.left}
                    onRequestClose={this.handleLeftClose}
                >
                    {navigationList}
                </Drawer>
            </div>
        );
    }
}

AdminNavBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AdminNavBar);