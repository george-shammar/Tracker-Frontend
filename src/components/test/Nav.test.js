import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../Nav';

it('renders Nav without crashing', () => {
    const div = document.createElement('div');
  
    ReactDom.render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
      div,
    );
  
    ReactDom.unmountComponentAtNode(div);
});

it('renders the Nav component correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
