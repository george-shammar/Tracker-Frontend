import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Tracker from '../Tracker';

const tracker = {
  id: 1,
  blood_pressure: 1,
  blood_glucose: 1,
  user_id: 1,
};

it('renders Tracker without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <Tracker tracker={tracker} key={tracker.id} />
    </BrowserRouter>,
    div,
  );

  ReactDom.unmountComponentAtNode(div);
});
