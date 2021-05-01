import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcPage } from '../components/dc/DcPage'
import { HeroePage } from '../components/heroes/HeroePage'
import { MarvelPage } from '../components/marvel/MarvelPage'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelPage} />
                    <Route exact path="/heroe/:heroeId" component={HeroePage} />
                    <Route exact path="/dc" component={DcPage} />

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
