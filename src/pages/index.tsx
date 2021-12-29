import Image from 'next/image';
import Head from 'next/head';
import Header from 'components/Header';

import Container from 'components/Container';
import Button from 'components/Button';
import imgProfile from 'assets/Avatar.svg';
// import imgProfile from 'assets/perfil2.png';

import imgProgramming from 'assets/programming.svg';
import imgProgrammingDark from 'assets/programmingDark.svg';
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import Card from 'components/Card';

const Home = () => {
  const { colorMode } = useColorMode();

  const color = {
    primary: useColorModeValue('secundary', 'primary'),
  };

  return (
    <>
      <Head>
        <title>Victor Samir</title>
      </Head>

      <Header colorTheme={color.primary} />

      <Container>
        <Flex
          as="section"
          w="100%"
          h="52rem"
          justify="space-between"
          align="center"
        >
          <Box w="40%" textAlign="start" mt="-5rem">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="0.15rem"
              color={color.primary}
            >
              Desenvolvedor front-end
            </Text>

            <Heading fontSize="5xl" letterSpacing="0.2rem" mt="0.5rem">
              Victor Samir
            </Heading>

            <Text fontSize="md" opacity="0.8" mb="2.5rem">
              Prazer, estou aqui para ajudar, facilitar e transformar o mundo
              das pessoas através de sites modernos.
            </Text>

            <Button
              colorTheme={color.primary}
              onClick={() =>
                (location.href =
                  'https://download853.mediafire.com/xonfy67leoeg/o5j34norl02vg7g/curriculo.pdf')
              }
            >
              BAIXAR CURRÍCULO
            </Button>
          </Box>

          <Box w="50%">
            {colorMode === 'light' ? (
              <Image src={imgProgrammingDark} alt="ilustração" />
            ) : (
              <Image src={imgProgramming} alt="ilustração" />
            )}
          </Box>
        </Flex>

        <Flex as="section" justify="space-between" align="center" mt="7rem">
          <Box>
            <VStack>
              <Card colorTheme={color.primary}></Card>
            </VStack>
          </Box>

          <Box></Box>
        </Flex>
      </Container>

      <Flex minH="100vh"></Flex>
    </>
  );
};

export default Home;
