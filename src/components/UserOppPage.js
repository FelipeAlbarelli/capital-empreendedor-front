import React from 'react';
import {Link as RouterLink , Route , Switch} from 'react-router-dom';
import {Box, Grid, Typography , Link } from "@material-ui/core"
import OppFilter from './OppFilter'
import Opp from './Opp'
import OppForm from './OppForm'

class UserOppPage extends React.Component {
    
    constructor(props){
        super(props);
        this.email = props.match.params.email;
        this.state = { 
            opps : [],
            visibleOpps : [] ,
            order : 'interest' ,
            filter:'',
            currOpp : {}
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
        this.deleteOpp = this.deleteOpp.bind(this);
        this.updateOpps = this.updateOpps.bind(this);
        this.history = props.history
    }

    deleteOpp(id){
        fetch(`/user/${this.email}/opportunities/${id}`)
            .then( body => body.json() )
            .then( console.log )
            .catch( console.log )
    }

    handleOrder(e){
        const newOrder = e.target.value;
        this.setState( prevState => ({
            order : newOrder,
            visibleOpps : prevState.opps
                .sort( (a,b) => a[newOrder] - b[newOrder] )
        }) )
    }

    handleFilter(e){
        const text = e.target.value.toLowerCase();
        this.setState( prevState => ({
            filter : text,
            visibleOpps : prevState.opps
                .filter( opp => opp.name.toLowerCase().includes(text) )
                .sort( (a,b) => a[this.state.order] - b[this.state.order] )
        }) );
    }

    componentDidMount(){
        this.updateOpps()
    }

    updateOpps(){
        fetch(`/user/${this.email}/opportunities`)
            .then( body => body.json() )
            .then( data => {
                this.setState( ps => ({
                    opps : data,
                    visibleOpps : data
                }) )
            } )
            .catch(console.log);
    }

    render(){
        return (
        <Box
            marginLeft="5%"
            marginRight="5%"
        >
            <Typography variant="h5" gutterBottom>
                <Link color="inherit" component={RouterLink} to={`/user/${this.email}`} >
                {this.email}
                </Link>
            </Typography>
            <Switch>
                <Route exact path="/user/:email/oportunidades" >
                    <OppFilter
                        handleFilter={this.handleFilter}
                        handleOrder={this.handleOrder}
                        order={this.state.order}
                        email={this.email}
                    />
                    <Grid container spacing={3}>
                        {this.state.visibleOpps.map( (i , j) => 
                            <Opp 
                                id={j} 
                                deleteFunc={this.deleteOpp}
                                email={this.email}
                                key={j}  {...i} /> 
                        )}
                    </Grid>
                </Route>
                <Route 
                    path="/user/:email/oportunidades/add"
                    render={(props) => (
                        <OppForm
                            {...props}
                            method='POST' 
                            email={this.email}
                        />
                    )}
                >
                </Route>
                <Route 
                    path='/user/:email/oportunidades/edit/:id'
                    render={(props) => (
                        <OppForm 
                            {...props} 
                            method='PATCH' 
                            email={this.email} 
                            refresh={this.updateOpps}
                            />
                    )}
                />
            </Switch>
        </Box>
        )
    }
}

export default UserOppPage