import Image from 'next/image';
import Head from 'next/head';
import Header from 'components/Header';

import Container from 'components/Container';
import Button from 'components/Button';
import Card from 'components/Card';

import imgProgramming from 'assets/programming.svg';
import imgProgrammingDark from 'assets/programmingDark.svg';
import imgDesing from 'assets/desing.svg';
import imgDesingDark from 'assets/desingDark.svg';
import imgFront from 'assets/front.svg';
import imgFrontDark from 'assets/frontDark.svg';
import imgWork from 'assets/work.svg';
import imgWorkDark from 'assets/workDark.svg';

import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

const Home = () => {
  const { colorMode } = useColorMode();

  const color = {
    primary: useColorModeValue('secundary', 'primary'),
    bg: useColorModeValue('secundary', '#cccccc1c'),
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

          <Box w="48%">
            {colorMode === 'light' ? (
              <Image src={imgProgrammingDark} alt="ilustração" />
            ) : (
              <Image src={imgProgramming} alt="ilustração" />
            )}
          </Box>
        </Flex>

        <Flex as="section" justify="space-between" align="start" mt="7rem">
          <Box w="48%">
            <VStack spacing="1.5rem" align="stretch">
              <Card
                title="Desing"
                description=" Criador de projetos digitais unicos."
                projects="5 projetos"
                img={imgDesing}
                imgDark={imgDesingDark}
                colorTheme={color.primary}
                colorBg={color.bg}
                selected={true}
              ></Card>

              <Card
                title="Front-End"
                description=" Desenvolvimento de aplicações web."
                projects="8 projetos"
                img={imgFront}
                imgDark={imgFrontDark}
                colorTheme={color.primary}
                colorBg={color.bg}
              ></Card>

              <Card
                title="Evolutix"
                description="Desenvovedor front-end jr."
                projects="2 projetos"
                img={imgWork}
                imgDark={imgWorkDark}
                colorTheme={color.primary}
                colorBg={color.bg}
              ></Card>
            </VStack>
          </Box>

          <Box>
            <Text fontSize="sm">Introdução</Text>
            <Heading mt="1rem">Ola, eu sou o Victor Samir</Heading>
          </Box>
        </Flex>
      </Container>

      <Flex minH="100vh"></Flex>
    </>
  );
};

export default Home;
