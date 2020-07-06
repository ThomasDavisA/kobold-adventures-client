import React from 'react';
import ReactDOM from 'react-dom';
import AdventurePage from './AdventurePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdventurePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});