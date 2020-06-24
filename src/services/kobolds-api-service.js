import config from '../config';

const KoboldsApiService = {
    getKobold(userId) {
        return fetch(`${config.API_ENDPOINT}/kobold`)
    },
    getEncounterOutcome(resolutionId) {
        return fetch(`${config.API_ENDPOINT}/adventure/resolution/${resolutionId}`, {
            headers: {
                'content-type': 'application/json'
            },
            
        })
            .then(res => {
                return res.json();
            })
    }
}

export default KoboldsApiService;