import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KoboldsContext from '../context/KoboldContext';
import StatusBar from '../component/StatusBar';
import KoboldsApiService from '../services/kobolds-api-service';

export default class RewardsPage extends Component {
    static contextType = KoboldsContext;

    state = {
        rewards: null,
        levelUp: null
    }

    componentDidMount = () => {
        KoboldsApiService.getRewards(this.context.kobold.kobold_id)
            .then(rewards => {
                this.setState({
                    rewards,
                    levelUp: rewards.levelUp
                });
            });
    }

    render() {
        console.log(this.state)
        return (
            <>
                {this.state.rewards &&
                    <div className="adventure-box">
                        <div className="bar-background progress-background"><div className="progress-complete finished"></div></div>
                        <h2>Adventure Complete!</h2>

                        <p>Kobold XP: {this.state.rewards.xp}</p>
                        <h4>Treasure:
                                    <ul>
                                <li>Wooden Nickels: {this.state.rewards.nickles}</li>
                                <li>Equipment Scraps: {this.state.rewards.scrap}</li>
                                <li>Dragon Influence: {this.state.rewards.influence}</li>
                            </ul>
                        </h4>
                    </div>}
                {this.state.levelUp &&
                    <div className='adventure-box'>
                        <h3>Level Up!</h3>
                        <h4>You gain 3 status points!</h4>
                        <p>Use them in the status menu.</p>
                    </div>}
                <Link to='/main'>
                    <button>Hooray!  End your Adventure.</button>
                </Link>
            </>
        )
    }
}