import React, { Component } from 'react';
import StatusBar from '../component/StatusBar';
import KoboldsContext from '../context/KoboldContext';
import KoboldsApiService from '../services/kobolds-api-service';

export default class StatusPage extends Component {
    static contextType = KoboldsContext;

    state = {
        rendered: false,
        statChangeFlag: false,
        unspent: null,
        muscle: null,
        fitness: null,
        eloquence: null,
        intellect: null,
        mana: null
    }

    componentDidMount = () => {
        KoboldsApiService.getKobold(this.context.kobold.kobold_id)
            .then(kobold => {
                this.context.setKobold(kobold);
                this.setState ({
                    rendered: true,
                    unspent: kobold.kobold_unspent_points,
                    muscle: kobold.kobold_muscle,
                    fitness: kobold.kobold_fitness,
                    eloquence: kobold.kobold_eloquence,
                    intellect: kobold.kobold_intellect,
                    mana: kobold.kobold_mana
                })
            });
    }

    increaseStat = (str) => {
        if(this.state.unspent === 0 || !this.state.unspent) {
            return;
        }

        const statIncrease = this.state[str] + 1
        const stats = {
            rendered: true,
            unspent: this.state.unspent - 1,
        }
        stats[str] = statIncrease;
        console.log(stats)
        this.setState(stats)
    }

    decreaseStat = (str) => {
        if(this.state[str] === 0) {
            return;
        }
        

        const statDecrease = this.state[str] - 1
        const stats = {
            rendered: true,
            unspent: this.state.unspent + 1,
        }
        stats[str] = statDecrease;
        console.log(stats)
        this.setState(stats)

    }

    finalizeStatus = () => {
        if (this.state.rendered) {
            KoboldsApiService.setKoboldStats(this.context.kobold.kobold_id, this.state)
        }

        this.props.history.goBack()
    }

    render() {
        return (
            <>
                <h2>Status!</h2>
                {this.state.rendered &&
                    <>
                        <h2>{this.context.kobold.kobold_name}</h2>
                        <div className="level-box">
                            <h3>Kobold Level: {this.context.kobold.kobold_level}</h3>
                            <h4>{this.context.kobold_xp}</h4>
                        </div>

                        <div className='currency-box'>
                            <h4>Currencies:</h4>
                            <h5>Nickels: {this.context.kobold.currency_wood_nickels}</h5>
                            <h5>Scraps: {this.context.kobold.currency_equipment_scraps}</h5>
                            <h5>Influence: {this.context.kobold.currency_dragon_influence}</h5>
                        </div>

                        <div className="stats-box">
                            <h3>Stats</h3>
                            <div className="stats-total">
                                <h4>Unspent Points: {this.state.unspent}</h4>
                                <h4>Muscle: {this.state.muscle}</h4> <button onClick={() => this.increaseStat('muscle')}>+</button><button onClick={() => this.decreaseStat('muscle')}>-</button>
                                <h4>Fitness: {this.state.fitness}</h4> <button onClick={() => this.increaseStat('fitness')}>+</button><button onClick={() => this.decreaseStat('fitness')}>-</button>
                                <h4>Eloquence: {this.state.eloquence}</h4> <button onClick={() => this.increaseStat('eloquence')}>+</button><button onClick={() => this.decreaseStat('eloquence')}>-</button>
                                <h4>Intellect: {this.state.intellect}</h4> <button onClick={() => this.increaseStat('intellect')}>+</button><button onClick={() => this.decreaseStat('intellect')}>-</button>
                                <h4>Mana: {this.state.mana}</h4> <button onClick={() => this.increaseStat('mana')}>+</button><button onClick={() => this.decreaseStat('mana')}>-</button>
                            </div>
                        </div>

                        <div className="adventure-box">
                            <button onClick={() => this.finalizeStatus()}>Return</button>
                        </div>
                    </>
                }

            </>
        )
    }
}