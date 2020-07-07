import React from 'react';
import ReactDOM from 'react-dom';
import AreaButton from './AreaButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AreaButton key={1}
    location={'location'}
    history={' '}
    className='location-box__button' />, div);
  ReactDOM.unmountComponentAtNode(div);
});