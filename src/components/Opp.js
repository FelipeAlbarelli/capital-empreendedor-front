import React from 'react';
import {Table , TableBody ,TableRow , TableCell , TableContainer , Paper , Button , Grid , Box  } from '@material-ui/core'
import {Link} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'


const Opp = ({name , limit , interest , term , isActive , deleteFunc , email ,id }) => (
    <Grid item xs={12} sm={6} md={4}>   
                <TableContainer component={Paper}>
                    <Table size='small' aria-label="opp table">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">Instituição</TableCell>
                                <TableCell align="right">{name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Limite</TableCell>
                                <TableCell align="right">
                                    <CurrencyFormat 
                                        value={limit} 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                        prefix={'$'} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Juros</TableCell>
                                <TableCell align="right">
                                    <CurrencyFormat 
                                        value={(interest * 100).toFixed(2)} 
                                        displayType={'text'} 
                                        suffix={'%'} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Prazo</TableCell>
                                <TableCell align="right">{term} meses</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Ativo</TableCell>
                                <TableCell align="right">{isActive ? "Sim" : "Não"}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    display="flex"
                    justifyContent="center"
                >
                    <Button 
                        variant="outlined" color='primary' size='small'
                        component={Link} to={`/user/${email}/oportunidades/edit/${id}`}
                        >Editar</Button>
                    <Button
                        variant="outlined" size='small' color='secondary' 
                        onClick={ () => deleteFunc(id) }
                    >Apagar</Button>
                </Box>
    </Grid>
)

export default Opp