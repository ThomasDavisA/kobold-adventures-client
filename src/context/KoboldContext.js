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
    setKobold: () => {},
    setLocation: () => {}
});

export default KoboldContext;

export class KoboldContextProvider extends React.Component {
    state = {
        kobold: nullKobold,
        location: null,
        difficulty: null
    };

    setKobold = kobold => {
        this.setState({ kobold })
    };

    setLocation = location => {
        this.setState({ location })
    };

    render() {
        const value = {
            kobold: this.state.kobold,
            setKobold: this.setKobold,
            setLocation: this.setLocation
        }
        return (
            <KoboldContext.Provider value={value}>
                {this.props.children}
            </KoboldContext.Provider>
        )
    }
}