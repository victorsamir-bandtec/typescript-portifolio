import Head from 'next/head';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import theme from 'styles/theme';

const GlobalStyle = () => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        body {
          font-family: 'Inter, system-ui, Georgia, serif';
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  </>
);

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
};

export default ThemeContainer;
