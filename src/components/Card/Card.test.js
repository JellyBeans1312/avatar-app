import React from 'react' 
import {Card} from './Card'
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockCharacter
  beforeEach(() => {
    mockCharacter = {_id: 1, name: 'andre', enemies: ['azula'], allies: ['3000'], photoUrl: 'aintnothangbutachickenwang'},
    wrapper = shallow(
      <Card 
      character = {mockCharacter}
      />
    )
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot(); 
  }); 

});