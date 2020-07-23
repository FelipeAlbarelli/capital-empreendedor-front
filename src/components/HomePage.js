import React from 'react';

import {Box} from '@material-ui/core'

import ClientList from './ClientList';
import ClientFilter from './ClientFilter';

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            clients : {},
            visibleClients : {}
        };
        this.handleFilter = this.handleFilter.bind(this)
    }

    componentDidMount(){
        fetch('/users')
            .then( body => body.json() )
            .then( clients => {
                this.setState( preState => ({
                    clients : clients,
                    visibleClients : clients
                }) )
            }).catch(console.log)
    }

    handleFilter(e){
        const text = e.target.value.toLowerCase();
        const newVisibleClients = Object.keys(this.state.clients)
            .filter( email => this.state.clients[email].name.toLowerCase().includes(text) )
            .reduce( (acu , curr ) => {
                acu[curr] = this.state.clients[curr];
                return acu
            } , {} )
        this.setState( prevState => ({
            visibleClients : newVisibleClients
        }) )
    }

    render(){
        return (
                <Box
                    marginLeft="5%"
                    marginRight="5%"
                >
                    <ClientFilter handleFilter={this.handleFilter} />
                    <ClientList clients={this.state.visibleClients} />
                </Box>
        )
    }
}


export default HomePage