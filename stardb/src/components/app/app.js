import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import { SwapiServieProvider } from "../swapi-service-context/swapi-service-context";

import './app.css';

import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import {StarshipDetails} from "../sw-components";

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
      this.setState(({swapiService}) => {
          const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
          return{
              swapiService: new Service()
          };
      });
    };

    render() {
        return (
            <ErrorBoundry>
                <SwapiServieProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />
                            <Routes>
                                <Route path="/" element={<Welcome/>}/>
                                <Route path="/people" element={<PeoplePage/>} />
                                <Route path="/planets" element={<PlanetPage/>} />
                                <Route path="/starships" element={<StarshipPage/>} />
                                <Route path="/starships/:id" element={<StarshipDetails/>}/>
                            </Routes>
                        </div>
                    </Router>
                </SwapiServieProvider>
            </ErrorBoundry>
        );
    }
}

const Welcome = () =>{
    return(
        <h2>Welcome to StarDB</h2>
    );
}
