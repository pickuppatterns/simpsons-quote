import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';
import { MemoryRouter } from 'react-router-dom';

describe('Quotes', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Quotes />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

