import React from 'react';
import {Link} from 'react-router-dom';
import {Typography , Button , ButtonGroup , Box , Table , TableBody ,TableRow , TableCell , TableContainer , Paper } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format';

class UserInfoPage extends React.Component {

    constructor(props){
        super(props);
        this.email = props.match.params.email;
        this.state = { client : {} }
    }

    componentDidMount(){
        fetch(`/user/${this.email}/info`)
            .then( body => body.json() )
            .then( data => {
                this.setState( ps => ({
                    client : data
                }) )
            } )
            .catch(console.log)
            ;
    }

    render(){
        return (
            <Box
                marginLeft="5%"
                marginRight="5%"
            >
                <Typography variant="h5" gutterBottom>
                    {this.state.client.name}
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">Email</TableCell>
                                <TableCell align="right">{this.state.client.email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Termos Aceitos</TableCell>
                                <TableCell align="right">{this.state.client.agreedTerms ? "Sim" : "Não"}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Ativo</TableCell>
                                <TableCell align="right">{this.state.client.isActive ? "Sim" : "Não"}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Telefone/Celular</TableCell>
                                <TableCell align="right">{this.state.client.phone}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Renda</TableCell>
                                <TableCell align="right">
                                    <CurrencyFormat 
                                        value={this.state.client.revenue} 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                        prefix={'$'} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    display="flex"
                    justifyContent="center"
                    marginTop='2%'
                >
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button to={'/'} component={Link} >Voltar</Button>
                    <Button to={`/user/${this.email}/oportunidades`} component={Link}  >Oportunidades</Button>
                </ButtonGroup>
                </Box>
            </Box>
        )
    }

}

export default UserInfoPage;