import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import { LoginPage } from '../components/login/LoginPage';
import { DashBoardRoutes } from './DashBoardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
               {/*  <Navbar /> */}

                <Switch>
                   <Route exact path="/login" component={LoginPage}></Route>
                   <Route path="/" component={DashBoardRoutes}></Route>
                </Switch>
            </div>
        </Router>
    )
}
