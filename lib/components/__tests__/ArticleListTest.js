import React from 'react';
import ArticleList from '../ArticleList';
import Articlecontainer from '../Article';
// import renderer from 'react-test-renderer';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('ArticleList',()=>{
  const testProps = {
    articles : {
      a : {id : 'a'},
      b : {id : 'b'}
    },

  };
  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    )
    // console.log(wrapper)
    expect(wrapper.find('Articlecontainer').length).toBe(2);
    // expect(tree.children.length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
