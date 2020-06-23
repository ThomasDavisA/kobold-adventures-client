import config from '../config';

const LocationsApiService = {
    getLocations(Koboldlevel) {
        return fetch(`${config.API_ENDPOINT}/locations`, {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Koboldlevel)
        })
            .then(res => {
                return res.json();
            })
    },
    getAdventure(location) {

    }
}

export default LocationsApiService;