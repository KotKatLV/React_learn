import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import './app.css';
import {PersonList, PlanetList, StarshipList} from "../sw-components";
import {PersonDetails, PlanetDetails, StarshipDetails} from "../sw-components";
import { SwapiServieProvider } from "../swapi-service-context/swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    // toggleRandomPlanet = () => {
    //     this.setState((state) => {
    //         return {
    //             showRandomPlanet: !state.showRandomPlanet
    //         }
    //     });
    // };

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> :  null;

        return (
            <ErrorBoundry>
                <SwapiServieProvider value={this.swapiService}>
                <div className="stardb-app">
                    <Header />

                    <PersonDetails itemId={11}/>
                    <PlanetDetails itemId={12}/>
                    <StarshipDetails itemId={9}/>

                    <PersonList />
                    <StarshipList />
                    <PlanetList />

                </div>
                </SwapiServieProvider>
            </ErrorBoundry>
        );
    }
}