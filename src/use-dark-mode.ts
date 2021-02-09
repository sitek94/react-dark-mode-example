import * as React from 'react';

export type DarkModeState = 'dark' | 'light';
export type SetDarkModeState = React.Dispatch<React.SetStateAction<DarkModeState>>;

export function useDarkMode() {
  const preferedDarkQuery = '(prefers-color-scheme: dark)';

  // Lazy initial state: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [mode, setMode] = React.useState<DarkModeState>(() => {
    const lsVal = window.localStorage.getItem('colorMode');

    if (lsVal) {
      return lsVal === 'dark' ? 'dark' : 'light';
    } else {
      return window.matchMedia(preferedDarkQuery).matches ? 'dark' : 'light';
    }
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferedDarkQuery);
    const handleChange = () => {
      setMode(mediaQuery.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
  }, [mode]);

  // we're doing it this way instead of as an effect so we only
  // set the localStorage value if they explicitly change the default
  return [mode, setMode] as const;
}
