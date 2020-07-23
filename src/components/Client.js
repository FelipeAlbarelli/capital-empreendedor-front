import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography , Box , ButtonGroup , Button} from "@material-ui/core"
import {Link} from 'react-router-dom';

const Client = ({classes , name , email}) => (
    <Grid item xs={12}>
        <Paper 
            elavation={3}
            className={classes.paper}
        >
            <Grid container justify="space-between"  alignItems="center">
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    <Box color="text.secondary" >
                        {email}
                    </Box>
                </Typography>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button  to={'/user/' + email} component={Link} size="small"> Perfil</Button>
                    <Button  to={'/user/'+ email + '/oportunidades'} component={Link} size="small" >Oportunidades</Button>
                </ButtonGroup>
            </Grid>
        </Paper>
    </Grid>
)

export default Client