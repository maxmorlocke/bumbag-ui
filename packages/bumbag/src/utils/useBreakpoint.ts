import * as React from 'react';
import { getMediaQueryList } from './getMediaQueryList';

import { useTheme } from './useTheme';

export function useBreakpoint(breakpoint) {
  const { theme } = useTheme();

  const mediaQueryList = React.useMemo(() => getMediaQueryList(breakpoint, theme), [breakpoint, theme]);
  const [doesMatch, setDoesMatch] = React.useState(mediaQueryList.matches);

  React.useEffect(() => {
    let mounted = true;

    setDoesMatch(mediaQueryList.matches);

    const onMediaChange = (e) => {
      if (!mounted) return;
      setDoesMatch(e.matches);
    };

    mediaQueryList.addListener(onMediaChange);
    return function cleanup() {
      mounted = false;
      mediaQueryList.removeListener(onMediaChange);
    };
  }, [mediaQueryList]);

  return doesMatch;
}
