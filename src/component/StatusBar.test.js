import React from 'react';
import ReactDOM from 'react-dom';
import StatusBar from './StatusBar';

let kobold = { kobold_health: 100, kobold_energy: 100 }

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusBar key={1}
    kobold={kobold} />, div);
  ReactDOM.unmountComponentAtNode(div);
});