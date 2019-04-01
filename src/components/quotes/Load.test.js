import React from 'react';
import renderer from 'react-test-renderer';
import Load from './Load';
import { MemoryRouter } from 'react-router-dom';

describe('Load', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Load />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

