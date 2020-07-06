import React from 'react';
import ReactDOM from 'react-dom';
import RewardsPage from './RewardsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RewardsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});