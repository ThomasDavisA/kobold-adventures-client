import config from '../config';
import TokenService from '../services/token-service';

const KoboldsApiService = {
    getKoboldByToken() {
        return fetch(`${config.API_ENDPOINT}/kobold`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                return res.json();
            });
    },
    postKobold(username) {
        return fetch(`${config.API_ENDPOINT}/kobold/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                username
            })
        })
            .then(res => {
                return res.json();
            });
    },
    getAdventureProgress(koboldId) {
        return fetch(`${config.API_ENDPOINT}/adventure/${koboldId}/progress`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                return res.json();
            });
    },
    clearAdventureProgress(koboldId) {
        return fetch(`${config.API_ENDPOINT}/adventure/${koboldId}/progress`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        });
    },
    getEncounterOutcome(resolutionId, koboldId) {
        return fetch(`${config.API_ENDPOINT}/adventure/resolution/${resolutionId}/${koboldId}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },

        })
            .then(res => {
                return res.json();
            });
    },
    getRewards(koboldId) {
        return fetch(`${config.API_ENDPOINT}/adventure/rewards/${koboldId}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                return res.json();
            });
    },
    setKoboldStats(KoboldId, stats) {
        return fetch(`${config.API_ENDPOINT}/kobold/${KoboldId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                kobold_unspent_points: stats.unspent,
                kobold_muscle: stats.muscle,
                kobold_fitness: stats.fitness,
                kobold_eloquence: stats.eloquence,
                kobold_intellect: stats.intellect,
                kobold_mana: stats.mana
            })
        })
            .then(res => {
                return;
            });
    }
}

export default KoboldsApiService;