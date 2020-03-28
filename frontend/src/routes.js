import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/logon';
import register from './pages/register';
import profile from './pages/profile';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={register}/>
                <Route path="/profile" component={profile}/>

            </Switch>
        </BrowserRouter>
    );
}