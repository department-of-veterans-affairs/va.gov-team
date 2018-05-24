import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FormFooter from '../../components/FormFooter';

describe('FormFooter', () => {
  it('should render', () => {
    const wrapper = shallow(<FormFooter formConfig={{}} currentLocation={{ pathname: '/introduction' }}/>);

    expect(wrapper.find('AskVAQuestions').length).to.equal(1);
  });

  it('should not render if on the confirmation page', () => {
    const wrapper = shallow(<FormFooter formConfig={{}} currentLocation={{ pathname: '/confirmation' }}/>);

    expect(wrapper.text()).to.be.empty;
  });

  it('should render <GetFormHelp> if passed to config', () => {
    const GetFormHelp = function GetFormHelp() { return (<div>Help!</div>); };
    const wrapper = shallow(<FormFooter formConfig={{ getHelp: GetFormHelp }} currentLocation={{ pathname: '/introduction' }}/>);

    expect(wrapper.find('AskVAQuestions').render().text()).to.contain('Help!');
  });
});
