import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Alert from '../../../components/appeals-v2/Alert';

describe('<Alert/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Alert/>);
    expect(wrapper.type()).to.equal('li');
  });

  it('should apply warning styling on take_action alert types', () => {
    const props = { displayType: 'take_action' };
    const wrapper = shallow(<Alert {...props}/>);
    const alertDiv = wrapper.find('.usa-alert-warning');
    expect(alertDiv.length).to.equal(1);
  });

  it('should apply info styling on info alert types', () => {
    const props = { displayType: 'info' };
    const wrapper = shallow(<Alert {...props}/>);
    const alertDiv = wrapper.find('.usa-alert-info');
    expect(alertDiv.length).to.equal(1);
  });

  it('should display a title passed in as a prop', () => {
    const title = 'Test Title';
    const props = { title };
    const wrapper = shallow(<Alert {...props}/>);
    const renderedTitle = wrapper.find('h4').render().text();
    expect(renderedTitle).to.equal(title);
  });

  it('should display a description passed in as a prop', () => {
    const description = (<p>Test Description</p>);
    const props = { description };
    const wrapper = shallow(<Alert {...props}/>);
    const alertContent = wrapper.find('.usa-alert-text').render().text();
    expect(alertContent).to.equal(description.props.children);
  });
});
