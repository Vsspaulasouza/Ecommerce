import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    white: '#FFF',
    black: {
      font: {
        title: '#151515',
        description: '#575757',
      },
    },
    gray: {
      100: '#D1D1D1',
    },
    green: {
      100: '#46760A',
      300: '#6A983C',
    },
  },
});

export default theme;
