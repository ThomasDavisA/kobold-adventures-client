import React, { Component } from 'react';
import Nickels from '../svg/two-coins.svg';
import Scrap from '../svg/swap-bag.svg';
import Influence from '../svg/spiked-dragon-head.svg';
import KoboldsContext from '../context/KoboldContext';
import KoboldsApiService from '../services/kobolds-api-service';

import './StatusPage.css';

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
        KoboldsApiService.getKoboldByToken()
            .then(kobold => {
                this.context.setKobold(kobold);
                this.setState({
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
        if (this.state.unspent === 0 || !this.state.unspent) {
            return;
        }

        const statIncrease = this.state[str] + 1
        const stats = {
            rendered: true,
            unspent: this.state.unspent - 1,
        }
        stats[str] = statIncrease;
        this.setState(stats)
    }

    decreaseStat = (str) => {
        if (this.state[str] === 0) {
            return;
        }


        const statDecrease = this.state[str] - 1
        const stats = {
            rendered: true,
            unspent: this.state.unspent + 1,
        }
        stats[str] = statDecrease;
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
                {this.state.rendered &&
                    <div className='status-box'>
                        <h2>{this.context.kobold.kobold_name}</h2>
                        <div className="level-box">
                            <h3>Level: {this.context.kobold.kobold_level}</h3>
                            <h4>XP:{this.context.kobold.kobold_xp}</h4>
                        </div>

                        <div className='currency-box'>
                            <h5>Nickels: {this.context.kobold.currency_wood_nickels} </h5><img className='currency__icon' alt='' src={Nickels} />
                            <h5>Scraps: {this.context.kobold.currency_equipment_scraps} </h5><img className='currency__icon' alt='' src={Scrap} />
                            <h5>Influence: {this.context.kobold.currency_dragon_influence}</h5> <img className='currency__icon' alt='' src={Influence} />
                        </div>

                        <div className="stats-box">
                            <h3>Stats</h3>
                            <h4>Unspent Points: {this.state.unspent}</h4>
                            <div className="stats-box__assignment">
                                <h5>Muscle: {this.state.muscle}</h5> <button className='stats-box__button stats-box__button--increment' onClick={() => this.increaseStat('muscle')}>+</button><button className='stats-box__button stats-box__button--decrement' onClick={() => this.decreaseStat('muscle')}>-</button>
                                <h5>Fitness: {this.state.fitness}</h5> <button className='stats-box__button stats-box__button--increment' onClick={() => this.increaseStat('fitness')}>+</button><button className='stats-box__button stats-box__button--decrement' onClick={() => this.decreaseStat('fitness')}>-</button>
                                <h5>Eloquence: {this.state.eloquence}</h5> <button className='stats-box__button stats-box__button--increment' onClick={() => this.increaseStat('eloquence')}>+</button><button className='stats-box__button stats-box__button--decrement' onClick={() => this.decreaseStat('eloquence')}>-</button>
                                <h5>Intellect: {this.state.intellect}</h5> <button className='stats-box__button stats-box__button--increment' onClick={() => this.increaseStat('intellect')}>+</button><button className='stats-box__button stats-box__button--decrement' onClick={() => this.decreaseStat('intellect')}>-</button>
                                <h5>Mana: {this.state.mana}</h5> <button className='stats-box__button stats-box__button--increment' onClick={() => this.increaseStat('mana')}>+</button><button className='stats-box__button stats-box__button--decrement' onClick={() => this.decreaseStat('mana')}>-</button>
                            </div>
                        </div>
                        <button className='button' onClick={() => this.finalizeStatus()}>Return</button>
                    </div>
                }

            </>
        )
    }
}