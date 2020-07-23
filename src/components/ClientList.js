import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Client from './Client';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
  },
}));

const ClientList = ({clients}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid

            container 
            spacing={3}
            justify="center">
                {Object.keys(clients).map( email => {
                    const client = clients[email];
                    return (
                    <Client key={email} email={email} classes={classes} name={client.name} />
                    )
                })}
        </Grid>
      </div>
    )
}

export default ClientList