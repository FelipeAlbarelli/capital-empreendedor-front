import React from 'react';
import {Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import {Button , AppBar , Toolbar , Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom : theme.spacing(2)
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function Header() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Capital Empreendedor
            </Typography>
            <Button color="inherit" component={Link} to="/">
                Página Inicial
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

