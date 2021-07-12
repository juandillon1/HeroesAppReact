import React from 'react'
import { Navbar } from '../components/UI/Navbar';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HeroesScreen } from '../components/Heroes/HeroesScreen';
import { DCScreen } from '../components/DC/DCScreen';
import { SearchScreen } from '../components/Search/SearchScreen';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
                    <Route exact path="/dc" component={DCScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>

        </>
    )
}
