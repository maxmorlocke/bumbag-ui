import { ViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from './Box';
import * as styles from './Box.styles';

export type LocalBoxSafeProps = {};
export type BoxSafeProps = BoxProps & ViewProps & LocalBoxSafeProps;

const useProps = createHook<BoxSafeProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'Box.Safe' }
);

export const BoxSafe = createComponent<BoxSafeProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBoxSafe,
      use: props.use,
      htmlProps: boxProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Box.Safe',
    },
    themeKey: 'Box.Safe',
  }
);
