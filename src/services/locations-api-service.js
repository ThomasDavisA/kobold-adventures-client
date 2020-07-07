import config from '../config';
import TokenService from '../services/token-service';

const LocationsApiService = {
    getLocations() {
        return fetch(`${config.API_ENDPOINT}/locations`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                return res.json();
            });
    },
    getAdventure(locationId) {
        return fetch(`${config.API_ENDPOINT}/adventure/${locationId}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                return res.json();
            });
    }
}

export default LocationsApiService;