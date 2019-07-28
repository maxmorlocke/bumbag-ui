// @ts-ignore
import _get from 'lodash/get';
import { FontSizeThemeConfig } from '../types';

export default (overrides: FontSizeThemeConfig) => ({
  100: 0.75,
  150: 0.875,
  200: 1,
  300: 1.25,
  400: 1.5,
  500: 2,
  600: 2.5,
  700: 3,
  800: 3.75,
  900: 4.5,
  ...overrides
});
