/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View, Artboard } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';

import Label from './components/Label';
import Palette from './components/Palette';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';
import BasicButton from './components/buttons/BasicButton';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

const Document = ({ system }: { system: DesignSystem }) => (

<View>
  <Artboard
    name="Color Palette"
    style={{
      width: 1640
    }}>
    <Section title="Colors">
      <Palette colors={system.colors}/>
    </Section>
  </Artboard>

  <Artboard
    name="Alert Boxes"
    style={{
      width: 1640
    }}>
    <Section title="Alert Boxes">
      <AlertBox
        headline='Headline'
        content='some content'
        isVisible={true}
        status='info'/>
    </Section>

  </Artboard>

  <Artboard
    name="Typography"
    style={{
      width: 1640
    }}>
    <Section title="Type Styles">
      {Object.keys(system.fonts).map(name => (
        <TypeSpecimen name={name} style={TextStyles.get(name)} />
      ))}
    </Section>
  </Artboard>

  <Section title="Buttons">
    <BasicButton txt='A default button' children='' backgroundColor={designSystem.colors.Primary} textColor={designSystem.colors.white}/>
  </Section>

  </View>
);

export default () => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts
  );

  render(<Document system={designSystem} />, context.document.currentPage());
};
