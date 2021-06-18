import Head from 'next/head';
import Header from 'components/Header';

import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  useColorMode,
} from '@chakra-ui/react';

export default function Home() {
  const { toggleColorMode } = useColorMode();

  console.log(toggleColorMode);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Flex direction="column" minH="200vh">
        <Header />
      </Flex>
    </>
  );
}
