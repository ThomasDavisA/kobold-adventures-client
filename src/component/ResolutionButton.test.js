import React from 'react';
import ReactDOM from 'react-dom';
import ResolutionButton from './ResolutionButton';

let res = { id: 1, resolution_name: 'test' }

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResolutionButton key={1}
    resolution={res} />, div);
  ReactDOM.unmountComponentAtNode(div);
});