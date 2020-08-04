import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navlinkTitle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '10px 30px 0px 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        textDecoration: 'none'
    },
    navtext: {
        marginTop: '10px'
    }
  }));

const Navbar  = () => {
   
      const classes = useStyles();
    return (
        <AppBar position="static">
  <Toolbar>

    <Typography variant="h6" className={classes.title}>
      Employees Managment Tool
    </Typography>
    <Button color="inherit"><NavLink to = "/register" className={classes.navlinkTitle}><div className={classes.navtext}>Create</div></NavLink></Button>
    <Button color="inherit"><NavLink to = "/" className={classes.navlinkTitle}><div className={classes.navtext}>List</div></NavLink></Button>
    <Button color="inherit"><NavLink to = "/Info" className={classes.navlinkTitle}><div className={classes.navtext}>How To Use</div></NavLink></Button>
  </Toolbar>
</AppBar>
    )
}
export default Navbar;