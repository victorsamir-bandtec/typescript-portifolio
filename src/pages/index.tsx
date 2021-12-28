import Image from 'next/image';
import Head from 'next/head';
import Header from 'components/Header';

import Container from 'components/Container';
import Button from 'components/Button';
import imgProgramming from 'assets/programming.svg';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Samir</title>
      </Head>

      <Header />

      <Container>
        <Flex direction="column" minH="200vh">
          <Flex w="100%" h="52rem" justify="space-between" align="center">
            <Box w="45%" textAlign="justify">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="0.2rem"
                opacity="0.8"
                color="primary"
              >
                Desenvolvedor front-end
              </Text>

              <Heading fontSize="5xl" letterSpacing="0.2rem">
                Victor Samir
              </Heading>

              <Text fontSize="md" opacity="0.8" mb="2.5rem">
                Prazer, desde criança sempre fui apaixonado por tecnologia,
                sendo assim sigo nessa área para poder transformar o mundo das
                pessoas atravez de sites modernos.
              </Text>

              <Button>BAIXAR CURRÍCULO</Button>
            </Box>

            <Box w="46%">
              <Image src={imgProgramming} alt="ilustração" />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
