import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import {Box, TextField , MenuItem , FormControl , InputLabel , Select , Button } from "@material-ui/core"


const OppFilter = ({ handleFilter , handleOrder , order , email }) => (
    <Box
        marginBottom="3.5%"
        display="flex"
        justifyContent="space-evenly"             
    >
        <TextField onInput={handleFilter} id="standard-basic" label="Filtrar por instituição" />
        <FormControl >
            <InputLabel id="simple-select-label">Ordem</InputLabel>
            <Select
                labelId="simple-select-label"
                id="simple-select"
                value={order}
                onChange={handleOrder}
            >
                <MenuItem value={'limit'}>Limite</MenuItem>
                <MenuItem value={'interest'}>Juros</MenuItem>
                <MenuItem value={'term'}>Prazo</MenuItem>
            </Select>
        </FormControl>
        <Button size="small" component={RouterLink} color="primary" to={`/user/${email}/oportunidades/add`} >
            Adc Oportunidade
        </Button>
    </Box>
)


export default OppFilter