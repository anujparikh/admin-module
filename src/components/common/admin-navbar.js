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
        }
    };

    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({open: drawerState});
    };

    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);

    render() {

        const navigationListItems = (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    <ListItemText primary="Users"/>
                </ListItem>
                <ListItem button>
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
                    onClick={this.handleLeftClose}
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