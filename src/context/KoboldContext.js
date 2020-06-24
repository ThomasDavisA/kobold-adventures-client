import React from 'react';

export const nullKobold = {
    //TODO: add kobold stats
    kobold_name: null,
    kobold_level: null,
    kobold_xp: null,
    kobold_muscle: null,
    kobold_fitness: null,
    kobold_eloqunce: null,
    kobold_mana: null,
    kobold_intellect: null,
    currency_wood_nickels: null,
    currency_equipment_scraps: null,
    currency_dragon_influence: null,
    kobold_health: null,
    kobold_max_health: null,
    kobold_energy: null,
    kobold_max_energy: null,
    kobold_energy_used_last: null,
    kobold_health_used_last: null
};

const KoboldContext = React.createContext({
    kobold: nullKobold,
    location: null,
    adventure: {
        encounter: null,
        resolutions: null
    },
    resolve: {
        resolveFlag: false,
        resolveSuccess: null,
        resolveMessage: null,
    },
    setKobold: () => {},
    setLocation: () => {},
    setAdventure: () => {},
    resolveAction: () => {},
    clearAction: () => {},
    clearAdventure: () => {}
});

export default KoboldContext;

export class KoboldContextProvider extends React.Component {
    state = {
        kobold: nullKobold,
        location: null,
        adventure: {
            encounter: null,
            resolutions: null
        },
        resolve: {
            resolveFlag: false,
            resolveSuccess: null,
            resolveMessage: null,
        },
        difficulty: null
    };

    setKobold = kobold => {
        this.setState({ kobold })
    };

    setLocation = location => {
        this.setState({ location })
    };

    setAdventure = (enc, res) => {
        this.setState({
            adventure: {
                encounter: enc,
                resolutions: res
            }
        })
    };

    resolveAction = (resolve) => {
        this.setState({
            resolve: {
                resolveFlag: true,
                resolveSuccess: resolve.status,
                resolveMessage: resolve.message,
            }
        })
    };

    clearAction = () => {
        this.setState({
            resolve: {
                resolveFlag: false,
                resolveSuccess: null,
                resolveMessage: null,
            }
        })
    };

    clearAdventure = () => {
        this.setState({
            adventure: {
                encounter: null,
                resolutions: null
            }
        })
    };

    render() {
        const value = {
            kobold: this.state.kobold,
            location: this.state.location,
            adventure: this.state.adventure,
            resolve: this.state.resolve,            
            setKobold: this.setKobold,
            setLocation: this.setLocation,
            setAdventure: this.setAdventure,
            resolveAction: this.resolveAction,
            clearAction: this.clearAction,
            clearAdventure: this.clearAdventure
        }
        return (
            <KoboldContext.Provider value={value}>
                {this.props.children}
            </KoboldContext.Provider>
        )
    }
}