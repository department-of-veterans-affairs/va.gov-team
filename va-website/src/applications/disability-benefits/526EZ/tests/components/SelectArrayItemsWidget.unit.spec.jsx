import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import SelectArrayItemsWidget from '../../components/SelectArrayItemsWidget';

import get from '../../../../../platform/utilities/data/get';

describe('<SelectArrayItemsWidget>', () => {
  let defaultProps = {};
  const onChangeSpy = sinon.spy();
  const selectedPropName = 'selected'; // Different from default to test that it uses this option
  const labelElement = (props) => {
    return (
      <div>
        {Object.keys(props).map(key => <p key={key} id={key}>{key}: {props[key]}</p>)}
      </div>
    );
  };

  beforeEach(() => {
    // Reset default props before each test
    onChangeSpy.reset();
    defaultProps = {
      value: [{ name: 'item one', propTwo: 'asdf' }, { name: 'item two' }],
      id: 'id',
      onChange: onChangeSpy,
      options: {
        label: labelElement,
        selectedPropName
      }
    };
  });

  it('should render a list of check boxes', () => {
    const wrapper = shallow(<SelectArrayItemsWidget {...defaultProps}/>);
    expect(wrapper.find('input[type="checkbox"]').length).to.equal(defaultProps.value.length);
  });

  it('should render a custom label component for the checkboxes', () => {
    const wrapper = shallow(<SelectArrayItemsWidget {...defaultProps}/>);
    expect(wrapper.find('labelElement').length).to.equal(defaultProps.value.length);
  });

  it('should pass the custom label the form data for that item', () => {
    const wrapper = shallow(<SelectArrayItemsWidget {...defaultProps}/>);
    wrapper.find('labelElement').forEach((element, index) => {
      expect(element.props()).to.eql(defaultProps.value[index]);
    });
  });

  it('should call onChange with the toggled the selected property when the checkbox is toggled', () => {
    const wrapper = mount(<SelectArrayItemsWidget {...defaultProps}/>);
    wrapper.find('.form-checkbox').forEach((element, index) => {
      onChangeSpy.reset();

      // Grab the default "checked" state
      // Note: Using `get` because that's what the widget uses
      const initiallySelected = get(selectedPropName, element.props());

      // "Click" the option
      // .simulate('click') wasn't calling the onChange handler for some reason
      element.find('input').first().props().onChange({ target: { checked: !initiallySelected } });

      // Check that it changed
      expect(onChangeSpy.callCount).to.equal(1);
      expect(onChangeSpy.firstCall.args[0][index])
        .to.eql({ ...defaultProps.value[index], selected: !initiallySelected });

      // "Click" the option
      element.find('input').first().props().onChange({ target: { checked: !!initiallySelected } });

      // Check that it changed back
      // Note: Because we're not actually re-rendering, it doesn't exactly "change back," but it's probably
      //  a close enough approximation to not worry about it.
      expect(onChangeSpy.callCount).to.equal(2);
      expect(onChangeSpy.secondCall.args[0][index])
        .to.eql({ ...defaultProps.value[index], selected: !!initiallySelected });
    });
  });
});

