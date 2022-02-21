import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import Row from "../row/row";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ItemList from '../item-list';
import './app.css';
import {PersonList, PlanetList, StarshipList} from "../sw-components/item-lists";
import {PersonDetails, PlanetDetails, StarshipDetails} from "../sw-components/details";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />

                    <PersonDetails itemId={11}/>
                    <PlanetDetails itemId={12}/>
                    <StarshipDetails itemId={9}/>

                    <PersonList />
                    <StarshipList />
                    <PlanetList />

                </div>
            </ErrorBoundry>
        );
    }
}