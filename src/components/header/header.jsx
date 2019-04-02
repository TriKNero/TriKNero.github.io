import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './../../logo.svg';

import './../../App.css';
import CustomDrawer from './custom-drawer';

class Header extends Component {
  state = {
    drawerOpen: false
  };

  handleDrawerClose = () => this.setState({drawerOpen: false});
  handleDrawerOpen = () => this.setState({drawerOpen: true});


  render() {
    const {classes} = this.props;
    const {drawerOpen} = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolBarStyle}>
            {this.renderMenuIcon()}
            {this.renderReactIcon()}
          </Toolbar>
        </AppBar>
        <CustomDrawer
          drawerOpen={drawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
      </div>
    );
  }

  renderMenuIcon = () => {
    const {classes} = this.props;

    return (
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon onClick={this.handleDrawerOpen}/>
      </IconButton>
    );
  };

  renderReactIcon = () => {
    return (
      <div>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </div>
    );
  };
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBarStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  }

};


export default withStyles(styles)(Header);
