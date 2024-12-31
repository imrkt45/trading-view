'use client';

import theme from './theme';

export default function AccessTheme() {

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  

  return {
    primary,
    secondary,
  };
}
