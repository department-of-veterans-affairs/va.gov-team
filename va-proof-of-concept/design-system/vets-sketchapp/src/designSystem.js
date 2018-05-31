import chroma from 'chroma-js';
import processColor from './processColor';
import type { Color } from './processColor';

export const colors = {
  'Primary': '#3ecb23',
  'Primary darker': '#003E73',
  'Primary darkest': '#112e51',
  'Primary Alt': '#02bfe7',
  'Primary Alt dark': '#00a6d2',
  'Primary Alt darkest': '#046b99',
  'Primary Alt Light': '#9bdaf1',
  'Primary Alt Lightest': '#e1f3f8',
  'Base': '#212121',
  'White': '#ffffff',
};

const typeSizes = [80, 48, 36, 24, 20, 16];

export const spacing = 16;

const fontFamilies = {
  display: 'Bitter',
  body: 'Source Sans Pro',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

export const fonts = {
  Headline: {
    color: colors.Base,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80,
  },
  'Title 1': {
    color: colors.Base,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48,
  },
  'Title 2': {
    color: colors.Base,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  'Title 3': {
    color: colors.Base,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  Body: {
    color: colors.Base,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
};

export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  colors,
  fonts,
  spacing,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
};
