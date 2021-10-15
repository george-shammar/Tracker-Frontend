import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

it('renders the Header component correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
