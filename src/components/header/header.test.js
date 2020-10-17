import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Header from './index'
import Adapter from 'enzyme-adapter-react-16';

//Internal imports
import {findByTestAttr} from '../../../utils'


Enzyme.configure({ adapter: new Adapter() });

const setUp=(props={})=>{
    const component=shallow(<Header {...props}/>);
    return component;
}

describe('Header Component',()=>{
    let component;
    beforeEach(()=>{
        component=setUp();
    })

    it('should render the component', ()=>{
        const wrapper=findByTestAttr(component,'headerComponent');
        expect(wrapper.length).toBe(1);
    })

    it('should render logo', ()=>{
        const logo=findByTestAttr(component,'logoIMG');
        expect(logo.length).toBe(1);
    })
});