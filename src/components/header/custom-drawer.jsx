import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from "@material-ui/core";
import {Constants} from './constants';

class CustomDrawer extends Component {

  state = {
    open: false
  };

  handleDrawerClose = () => this.setState({open: !this.state.open});

  render() {
    const {classes, drawerOpen, handleDrawerClose} = this.props;
    const drawerClasses = {paper: classes.drawerPaper};
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={drawerClasses}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={handleDrawerClose}
          >
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <List>
          {this.renderDrawerOptions()}
        </List>
        <Divider/>
      </Drawer>
    );
  }

  renderDrawerOptions = () => {
    const {drawerSections} = Constants;
    return drawerSections.map(this.renderDrawerOption);
  };

  renderDrawerOption = (drawerItem, index) => {
    const {classes} = this.props;
    const {name, link, icon} = drawerItem;
    return (
      <ListItem
        key={index}
        button
      >
        <a href={link} style={{display: 'flex'}}>
          <ListItemIcon>
            <img
              src={icon}
              alt=''
              className={classes.imageStyle}
            />
          </ListItemIcon>
          <ListItemText primary={name}/>
        </a>
      </ListItem>
    );
  };
}

const drawerWidth = 240;

const styles = (theme) => ({
  imageStyle: {
    maxWidth: '20px',
    maxHeight: '20px'
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

export default withStyles(styles)(CustomDrawer);