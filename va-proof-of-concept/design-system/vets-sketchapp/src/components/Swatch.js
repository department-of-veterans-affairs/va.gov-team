/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import AccessibilityBadge from './AccessibilityBadge';
import Label from './Label';
import chroma from 'chroma-js';
import type { Color } from '../processColor';

const SWATCH_WIDTH = 100;

type P = {
  name: string,
  color: Color,
};

console.log(chroma.contrast('#003E73', 'white'), '\n');

const Swatch = ({ color, name }: P) => (
  <View name={name} style={{ marginBottom: 48, marginRight: 48 }}>
    <View
      style={{
        width: SWATCH_WIDTH,
        height: SWATCH_WIDTH,
        backgroundColor: color,
        borderWidth:1,
        borderColor:'grey',
        borderRadius: 4,
        marginBottom: 8,
      }}
    />
    <Label>{name}</Label>
    <Label>{color}</Label>
  </View>
);

export default Swatch;
