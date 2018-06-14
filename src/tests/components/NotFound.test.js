import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../components/NotFound';

test('should render Not Found correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').length).toBe(1)
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
});
