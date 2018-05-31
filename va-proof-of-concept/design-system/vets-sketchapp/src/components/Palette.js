/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Swatch from './Swatch';
import Label from './Label';

const SWATCH_WIDTH = 100;

type P = {
  colors: any,
};

const Palette = ({ colors }: P) => (
  <View>
    <View
      style={{
        width: (SWATCH_WIDTH + 48) * 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
    {Object.keys(colors).map(name => <Swatch color={colors[name]} name={name} />)}
    </View>
  </View>
);

export default Palette;
