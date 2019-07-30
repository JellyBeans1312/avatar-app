import React from 'react';
import { shallow } from 'enzyme';
import { CharacterContainer, mapStateToProps, mapDispatchToProps } from './CharacterContainer';
import { filterCharacters } from '../../actions'

describe('filters and methods', () => {
  let wrapper;
  let mockEvent;
  let allChars
  let props
  beforeEach(() => {
    mockEvent = {
      target: {
        id: 1
      }
    };
    allChars = [{ id: 1, name: 'Aang', affilitaion: 'air' }, 
    { id: 2, name: 'Katara', affilitaion: 'water'},
    { id: 3, name: 'Toph', affilitaion: 'earth'},
    { id: 4, name: 'Zuko', affilitaion: 'fire'},

  ];
    props = {
      characters: allChars,
      filterStatus: 'all',
      filterClick: jest.fn()
    };
    wrapper = shallow(<CharacterContainer {...props} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should iterate through all characters', () => {
    
    expect(wrapper.instance().allCharacters().length).toEqual(4);
  });

  it.skip('should filter through all characters and only return the people from water nation', () => {
    expect(wrapper.instance().waterNation().length).toEqual(1);
  });

  it.skip('should filter through all characters and only return the people from fire nation', () => {
    expect(wrapper.instance().fireNation().length).toEqual(1);
  });
  it.skip('should filter through all characters and only return the people from earth nation', () => {
    expect(wrapper.instance().earthNation().length).toEqual(1);
  });

  it.skip('should filter through all characters and only return the people from air nation', () => {
    expect(wrapper.instance().airNation().length).toEqual(1);
  });
});

describe('mapStateToProps', () => {
  it('should contain the characters and filterStatus', () => {
    const mockState = {
      characters: 'hello',
      filter: 'all'
    };
    const expected = {
      characters: 'hello',
      filterStatus: 'all'
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should map filterCharacters to props', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = filterCharacters(undefined);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.filterClick();
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
