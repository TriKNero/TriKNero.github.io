import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


class Welcome extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.mainBlock}>
        <Typography
          variant='h3'
          color='error'
        >
          Kristian Korneev Blog.
          It's first draft now.
        </Typography>
      </div>
    );
  }
}

const styles = {
  mainBlock: {
    color: '#fff'
  }
};

export default withStyles(styles)(Welcome);
