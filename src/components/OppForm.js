import React from 'react';
import {TextField , Box ,Checkbox , FormControlLabel , Grid , Button} from '@material-ui/core';
import {Link} from 'react-router-dom'; 

class OppForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name : '',
            limit : 0,
            interest : 0,
            term : 0,
            isActive : true
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.id = props.match.params.id;
    }

    componentDidMount(){
        if (this.props.method === "PATCH"){
            fetch(`/user/${this.props.email}/opportunities/${this.id}`)
            .then( body => body.json() )
            .then( data => {
                this.setState( pS => ({...data}))
            })
            .catch(console.log)
        }
    }

    handleInput(inputName){
        return e => {
            const value = e.target.value;
            this.setState( pState => {
                const newState = {};
                newState[inputName] = value;
                return newState;
            })
        }
    }

    handleCheck(e){
        // const value = e.target.value;
        this.setState( pState => ({
            isActive : !pState.isActive
        }))
    }

    handleSubmit(){
        const body = {...this.state , interest : this.state.interest / 100 };
        fetch(`/user/${this.props.email}/opportunities${this.props.method === "PATCH" ?  `/${this.id}` : ''}`,{
            method : this.props.method || "POST",
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(body)
        }).then( res => {
            if (!res.ok){
                throw new Error("error with connection")
            }
            this.props.refresh();
            this.props.history.push(`/user/${this.props.email}/oportunidades`)
        }).catch(console.log)
    }

    render(){
        return (
        <Box
            marginBottom="2.5%"
            component='form'
        >
            <Grid container spacing={3} 
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={6} sm={4} lg={2} >
                    <TextField onInput={this.handleInput('name')} value={this.state.name} id="name" label="instituição" />
                </Grid>
                <Grid item xs={6} sm={4} lg={2} >
                    <TextField 
                        type="number"
                        onInput={this.handleInput('limit')} 
                        value={this.state.limit}  id="limit" label="limite" />
                </Grid>
                <Grid item xs={6} sm={4} lg={2} >
                    <TextField
                        type='number'
                        onInput={this.handleInput('interest')}
                        value={this.state.interest}  id="interest" label="juros (%)"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={2} >
                    <TextField 
                        type="number"
                        onInput={this.handleInput('term')}
                        id="term" label="prazo (meses)"
                        value={this.state.term}
                        />
                </Grid>
                <Grid item xs={6} sm={4} lg={2} >
                    <FormControlLabel
                        control={<Checkbox checked={this.state.isActive} onChange={this.handleCheck} color="text.secondary" />}
                        label="ativo"
                        labelPlacement="start"
                        color='text.secondary'
                    />
                </Grid>
                <Grid  item xs={6} sm={4} lg={2} >
                    <Button color='primary' variant='outlined'
                        onClick={this.handleSubmit}
                    >
                        Enviar
                    </Button>
                    {this.props.email ?
                    <Button color='secondary' variant='outlined'  to={`/user/${this.props.email}/oportunidades`} component={Link}>
                        Voltar
                    </Button> : ''
                }
                </Grid>
            </Grid>     
        </Box>
        )
    }



}


export default OppForm