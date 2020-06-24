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
    getAdventure(locationId) {
        return fetch(`${config.API_ENDPOINT}/adventure/${locationId}`, {
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                return res.json();
            })
    }
}

export default LocationsApiService;