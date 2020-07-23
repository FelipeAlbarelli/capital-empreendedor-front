import React from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import UserInfoPage from '../components/UserInfoPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import UserOppPage from '../components/UserOppPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/user/:email' exact component={UserInfoPage} />
            <Route path='/user/:email/oportunidades' component={UserOppPage} />
            <Route  component={NotFoundPage} />       
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;