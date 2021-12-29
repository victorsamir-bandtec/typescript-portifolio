import Head from 'next/head';
import { ChakraProvider, CSSReset, useColorModeValue } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import theme from 'styles/theme';

const GlobalStyle = () => {
  // const color = {
  //   primary: useColorModeValue('secundary', 'primary'),
  // };

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            scroll-behavior: smooth;

            @media (max-width: 1170px) {
              font-size: 59%;
            }

            @media (max-width: 1085px) {
              font-size: 55%;
            }

            @media (max-width: 768px) {
              font-size: 48%;
            }
          }

          body {
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;

            &::-webkit-scrollbar {
              width: 8px;
            }

            &::-webkit-scrollbar-track {
              background: rgb(26, 26, 26);
            }

            &::-webkit-scrollbar-thumb {
              background-color: #66fcf1;
              border-radius: 20px;
            }
          }

          h2 {
            font-family: 'Inter', sans-serif !important;
          }

          button {
            &:focus {
              box-shadow: none !important;
            }

            &:active {
              transform: scale(0.9);
            }
          }

          .active::after {
            content: '';
            position: absolute;
            display: block;

            width: 3.5rem;
            height: 0.15rem;

            border-radius: 1rem;
          }
        `}
      />
    </>
  );
};

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
};

export default ThemeContainer;
