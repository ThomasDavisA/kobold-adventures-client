import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import LoginPage from './routes/LoginPage';
import NewsPage from './routes/NewsPage';
import AreaSelectPage from './routes/AreaSelectPage';
import DifficultySelectPage from './routes/DifficultySelectPage';
import AdventurePage from './routes/AdventurePage';
import StatusPage from './routes/StatusPage';
import StatusBar from './component/StatusBar';
import RewardsPage from './routes/RewardsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/main' exact component={NewsPage} />
          <Route path='/main/areaselect' component={AreaSelectPage} />
          <Route path='/main/difficultyselect' component={DifficultySelectPage} />
          <Route path='/main/adventure' exact component={AdventurePage} />
          <Route path='/main/adventure/rewards' component={RewardsPage} />
          <Route path='/main/status/' component={StatusPage} />
        </Switch>
        <Route path='/main' component={StatusBar} />
      </BrowserRouter>
    </div>
  );
}

export default App;
