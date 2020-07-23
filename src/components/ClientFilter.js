import React from 'react';
import {TextField , Container , Box} from '@material-ui/core'

const ClientFilter = props => (
    <Container 
        maxWidth="sm"
    >
        <Box
            marginBottom="2.5%"
            display="flex"
            justifyContent="center"
        >
        <form  noValidate autoComplete="off">
        <TextField onInput={props.handleFilter} id="standard-basic" label="Filtrar por nome" />
        </form>
        </Box>

    </Container >
)

export default ClientFilter