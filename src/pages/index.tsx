import { useState } from 'react';

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
import imgCss from 'assets/css.png';
import imgHtml from 'assets/html.png';
import imgJs from 'assets/js.png';
import imgTs from 'assets/ts.png';
import imgSass from 'assets/sass.png';
import imgReact from 'assets/react.png';
import imgAngular from 'assets/angular.png';
import imgFigma from 'assets/figma.png';

import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  VStack,
  HStack,
} from '@chakra-ui/react';

const Home = () => {
  const [card, setCard] = useState(1);

  const { colorMode } = useColorMode();
  const color = {
    primary: useColorModeValue('secundary', 'primary'),
    bg: useColorModeValue('#b8b8b81a', '#c0c0c01c'),
  };

  const handleCard = (cardNumber: number) => {
    setCard(cardNumber);
    console.log(cardNumber);
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
          <Box w="40%" textAlign="start" mt="-4.5rem">
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

            <Text fontSize="md" opacity="0.8" mb="3rem">
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

        <span id="skils"></span>

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
                selected={card === 1}
                onClick={() => setCard(1)}
              >
                <Box w="1.7rem">
                  <Image src={imgFigma} alt="icon" />
                </Box>
              </Card>

              <Card
                title="Front-End"
                description=" Desenvolvimento de aplicações web."
                projects="8 projetos"
                img={imgFront}
                imgDark={imgFrontDark}
                colorTheme={color.primary}
                colorBg={color.bg}
                selected={card === 2}
                onClick={() => setCard(2)}
              >
                <Box w="1.7rem">
                  <Image src={imgHtml} alt="icon" />
                </Box>

                <Box w="1.7rem">
                  <Image src={imgCss} alt="icon" />
                </Box>

                <Box w="1.7rem">
                  <Image src={imgSass} alt="icon" />
                </Box>

                <Box w="1.7rem">
                  <Image src={imgJs} alt="icon" />
                </Box>

                <Box w="1.7rem">
                  <Image src={imgTs} alt="icon" />
                </Box>

                <Box w="1.7rem">
                  <Image src={imgReact} alt="icon" />
                </Box>

                <Box w="2.1rem">
                  <Image src={imgAngular} alt="icon" />
                </Box>
              </Card>

              <Card
                title="Evolutix"
                description="Desenvovedor front-end jr."
                projects="2 projetos"
                img={imgWork}
                imgDark={imgWorkDark}
                colorTheme={color.primary}
                colorBg={color.bg}
                selected={card === 3}
                onClick={() => setCard(3)}
              >
                <Box w="1.7rem">
                  <Image src={imgHtml} alt="icon" />
                </Box>

                <Box w="1.7rem">
                  <Image src={imgCss} alt="icon" />
                </Box>

                <Box w="1.7rem">
                  <Image src={imgSass} alt="icon" />
                </Box>

                <Box w="1.7rem">
                  <Image src={imgTs} alt="icon" />
                </Box>

                <Box w="2.1rem">
                  <Image src={imgAngular} alt="icon" />
                </Box>
              </Card>
            </VStack>
          </Box>

          <Box>
            {card === 1 && (
              <>
                <Heading>Ola, eu sou o Victor Samir</Heading>
              </>
            )}

            {card === 2 && <></>}

            {card === 3 && <></>}
          </Box>
        </Flex>
      </Container>

      <Flex minH="100vh"></Flex>
    </>
  );
};

export default Home;
