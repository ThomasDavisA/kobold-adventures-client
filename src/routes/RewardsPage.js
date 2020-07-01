import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KoboldsContext from '../context/KoboldContext';
import KoboldsApiService from '../services/kobolds-api-service';
import Nickels from '../svg/two-coins.svg';
import Scrap from '../svg/swap-bag.svg';
import Influence from '../svg/spiked-dragon-head.svg';

import './RewardsPage.css';

export default class RewardsPage extends Component {
    static contextType = KoboldsContext;

    state = {
        rewards: null,
        levelUp: null
    }

    componentDidMount = () => {
        KoboldsApiService.getKoboldByToken()
            .then(kobold => {
                this.context.setKobold(kobold);
                KoboldsApiService.getRewards(this.context.kobold.kobold_id)
                    .then(rewards => {
                        this.setState({
                            rewards,
                            levelUp: rewards.levelUp
                        });
                    });
            });

    }

    render() {
        return (
            <>
                {this.state.rewards &&
                    <div className="div__rewards-box">
                        <div className='rewards-box__header'>
                            <div className="bar-background progress-background"><div className="progress-complete finished"></div></div>
                            <h2>Adventure Complete!</h2>
                        </div>

                        <p>Kobold XP: {this.state.rewards.xp}</p>
                        <h4 className='rewards-box__treasure'>Treasure:
                            <ul className='rewards-box__list'>
                                <li><img className='currency__icon' alt='' src={Nickels} />Wooden Nickels: {this.state.rewards.nickles}</li>
                                <li><img className='currency__icon' alt='' src={Scrap} />Equipment Scraps: {this.state.rewards.scrap}</li>
                                <li><img className='currency__icon' alt='' src={Influence} />Dragon Influence: {this.state.rewards.influence}</li>
                            </ul>
                        </h4>

                        {this.state.levelUp &&
                            <div className='div__levelup-box'>
                                <h3>Level Up!</h3>
                                <h4>You gain 3 status points!</h4>
                                <p>Use them in the status menu.</p>
                            </div>}

                        <Link to='/main'>
                            <button className='rewards-box__button'>Hooray!  End your Adventure.</button>
                        </Link>
                    </div>}


            </>
        )
    }
}