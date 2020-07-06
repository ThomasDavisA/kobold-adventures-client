import React from 'react';
import ReactDOM from 'react-dom';
import StatusPage from './StatusPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});