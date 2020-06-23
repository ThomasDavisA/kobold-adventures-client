import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatusBar from '../component/StatusBar';

export default class RewardsPage extends Component {


    render() {
        return (
            <>

                <div class="adventure-box">
                    <div class="bar-background progress-background"><div class="progress-complete finished"></div></div>
                    <h2>Adventure Complete!</h2>
                    <br />
                    <p>Treasure:
                        <ul>
                            <li>Wooden Nickels: 6!</li>
                            <li>Kobold XP: 5!</li>
                        </ul>
                    </p>

                    <p>Equipment:
                        <ul>
                            <li>Kobold Stick with Extra Kobold</li>
                            <li>Cloth Brigadine of Rapture</li>
                        </ul>
                    </p>
                </div>

                <div class="adventure-box">
                    <h3>Level up!</h3>
                    <p>Good job being a kobold!  Choose where to focus your points:</p>
                    <ul class="stats-list">
                        <li>Muscle: 3 <button class="stat-button">+</button></li>
                        <li>Fitness: 2 <button class="stat-button">+</button></li>
                        <li>Intellect: 5 <button class="stat-button">+</button></li>
                        <li>Eloquence: 8 <button class="stat-button">+</button></li>
                        <li>Mana: 7 <button class="stat-button">+</button></li>
                    </ul>
                </div>
                <Link to='/main'>
                <button>Hooray!  End your Adventure.</button>
                </Link>

                <StatusBar />
            </>
        )
    }
}