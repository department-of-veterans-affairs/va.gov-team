import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import WhatsNext from '../../../components/appeals-v2/WhatsNext';

describe('<WhatsNext/>', () => {
  const defaultProps = {
    nextEvents: {
      header: '',
      events: [],
    },
  };

  const eventsList = [
    {
      title: 'Additional evidence',
      description: <p>Some description goes here</p>,
      durationText: '11 months',
      cardDescription: 'Test description contents',
    }, {
      title: 'Appeal certified to the Board',
      description: <p>Another description goes here</p>,
      durationText: '2 months',
      cardDescription: 'Test description contents'
    }
  ];

  it('renders', () => {
    const wrapper = shallow(<WhatsNext {...defaultProps}/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('renders a header title', () => {
    const testHeaderText = 'Test Header';
    const props = {
      ...defaultProps,
      nextEvents: {
        ...defaultProps.nextEvents,
        header: testHeaderText
      },
    };
    const wrapper = shallow(<WhatsNext {...props}/>);
    const headerText = wrapper.find('h2 + p').render().text();
    expect(headerText).to.equal(testHeaderText);
  });

  it('renders a header DurationCard if headerCard property exists', () => {
    const props = {
      nextEvents: {
        header: '',
        headerCard: {
          durationText: 'Some duration text goes here',
          cardDescription: 'Not sure how long this takes',
        },
        events: [],
      },
    };

    const wrapper = shallow(<WhatsNext {...props}/>);
    expect(wrapper.find('DurationCard').length).to.equal(1);
  });

  it('does not render a header DurationCard if no headerCard property exists', () => {
    const wrapper = shallow(<WhatsNext {...defaultProps}/>);
    expect(wrapper.find('DurationCard').length).to.equal(0);
  });

  it('renders a list of all next events for a given currentStatus', () => {
    const props = {
      ...defaultProps,
      nextEvents: {
        ...defaultProps.nextEvents,
        events: eventsList
      }
    };

    const wrapper = shallow(<WhatsNext {...props}/>);
    const nextEventList = wrapper.find('NextEvent');
    expect(nextEventList.length).to.equal(eventsList.length);
  });
});
