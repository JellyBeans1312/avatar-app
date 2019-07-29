import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme'


describe('App', () => {
  let wrapper;
  let mockCharacters;
  let mockShowCharacters;
  beforeEach(() => {
    mockCharacters = [
      {id: 1, name: 'andre', enemies: ['azula'], allies: ['3000'], photoUrl: 'aintnothangbutachickenwang'},
      {id: 2, name: 'they adore', enemies: ['who'], allies: ['they'], photoUrl: 'cametosee'}
    ]
    mockShowCharacters = jest.fn()
    wrapper = shallow(<App 
      allCharacters={mockCharacters}
      characters={mockShowCharacters}
      />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot(); 
  });

  it('should invoke getAllCharacters when component is mounted', () => {
    expect(wrapper.instance().props.getAllCharacters).toHaveBeenCalled
  });

  it.skip('should throw an error if fetching failed (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

  });


})
