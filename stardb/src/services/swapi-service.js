export default class SwapiService {

    _apiBAse = 'https://swapi.dev/api';

    async getResource(url){
        const res = await fetch(`${this._apiBAse}${url}`);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    async getAllPeople(){
        const result = await this.getResource(`/people/`)
        return result.results;
    }

    getPerson(id){
        return this.getResource(`/people/${id}/`)
    }

    async getAllPlanets(){
        const result = await this.getResource(`/planets/`)
        return result.results;
    }

    getPlanet(id){
        return this.getResource(`/planet/${id}/`)
    }

    async getAllStarships(){
        const result = await this.getResource(`/starships/`)
        return result.results;
    }

    getStarship(id){
        return this.getResource(`/starships/${id}/`)
    }
}