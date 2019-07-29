import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme'
import { showCharacters } from  '../../actions'


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

  // it('should call characters() ', () => {
  //   expect(wrapper.instance().props.characters).toHaveBeenCalled
  // });

  it.skip('should throw an error if fetching failed (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
  });
  describe('mapStateToProps', () => {
    it('should contain allCharacters', () => {
      const mockState = {
        characters: 'andre3000000000'
      };
      const expected = {
        allCharacters: 'andre3000000000',
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
  describe('mapDispatchToProps', () => {
    it('should call call showCharacters', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = showCharacters();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.characters();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
