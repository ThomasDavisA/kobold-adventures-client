import config from '../config';

const KoboldsApiService = {
    getKobold(KoboldId) {
        return fetch(`${config.API_ENDPOINT}/kobold/${KoboldId}`)
            .then(res => {
                return res.json();
            })
    },
    getEncounterOutcome(resolutionId, koboldId) {
        return fetch(`${config.API_ENDPOINT}/adventure/resolution/${resolutionId}/${koboldId}`, {
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => {
                return res.json();
            })
    },
    getRewards(koboldId) {
        return fetch(`${config.API_ENDPOINT}/adventure/rewards/${koboldId}`, {
        })
            .then(res => {
                return res.json();
            })
    },
    setKoboldStats(KoboldId, stats) {
        return fetch(`${config.API_ENDPOINT}/kobold/${KoboldId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
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
            })
    }
}

export default KoboldsApiService;