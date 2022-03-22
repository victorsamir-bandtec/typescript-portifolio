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
import imgGit from 'assets/git.svg';
import imgGitDark from 'assets/gitDark.svg';
import imgEmail from 'assets/mail.svg';
import imgEmailDark from 'assets/mailDark.svg';
import imgLinkedin from 'assets/linkedin.svg';
import imgLinkedinDark from 'assets/linkedinDark.svg';
import imgHyper from 'assets/hyper.png';
import imgPerfil from 'assets/perfil.jpeg';

import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  VStack,
  HStack,
  Grid,
  GridItem,
  Circle,
} from '@chakra-ui/react';
import Works from 'components/Works';

const Home = () => {
  const [card, setCard] = useState(1);

  const { colorMode } = useColorMode();
  const color = {
    primary: useColorModeValue('secundary', 'primary'),
    hover: useColorModeValue('#b8b8b81a', '#c0c0c01c'),
    bg: useColorModeValue('#fff', '#202833'),
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
        <Flex as="section" justify="space-between" align="stretch" my="7rem">
          <Box w="48%">
            <VStack spacing="2rem" align="stretch">
              <Card
                title="Design"
                description=" Criador de projetos digitais unicos."
                projects="5 projetos"
                img={imgDesing}
                imgDark={imgDesingDark}
                colorTheme={color.primary}
                colorBg={color.hover}
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
                colorBg={color.hover}
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
                colorBg={color.hover}
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

          <Box w="40%">
            {card === 1 && (
              <Box className="animation-fade">
                <Text fontSize="md">Design</Text>

                <Heading fontSize="3xl" fontWeight="semibold" my="3.5rem">
                  O que é o design ?
                </Heading>

                <Text fontSize="lg" textAlign="justify" fontWeight="semibold">
                  O Design é responsável por toda área interfaces digitais, ele
                  que deixa a sua aplicação única e especial.
                </Text>

                <Text fontSize="md" textAlign="justify" mt="3.5rem">
                  Quando eu comecei nessa área de{' '}
                  <strong>desenvolvimento web</strong> uma das primeiras coisas
                  que comecei a estudar foi justamente essa parte de desing,
                  fiquei impressionado em como isso pode mudar totalmente uma
                  aplicação, então me aprofundei no assunto de
                  <strong> UX</strong> , para desenvolver melhores interfaces,
                  me aprofundei no
                  <Text as="span" color={color.primary} fontWeight="semibold">
                    {''} Figma {''}
                  </Text>
                  (ferramenta para criação de layout), e construí diversos
                  projetos nele, sempre com um padrão elevado de mercado e um
                  estilo único para cada cliente.
                </Text>
              </Box>
            )}

            {card === 2 && (
              <Box className="animation-fade">
                <Text fontSize="md">Front-End</Text>

                <Heading fontSize="3xl" fontWeight="semibold" my="3.5rem">
                  O que é o front-end ?
                </Heading>

                <Text fontSize="lg" textAlign="justify" fontWeight="semibold">
                  Ele pega toda a interface desenvolvida no design e converte em
                  código para que o usuário possa interagir.
                </Text>

                <Text fontSize="md" textAlign="justify" mt="3.5rem">
                  Após entender como funcionava a parte de prototipação de
                  layout, fui correndo ver como eu colocaria tudo isso em código
                  para que pessoas do mundo todo pudessem interagir com minhas
                  aplicações, então com meus estudos na faculdade{' '}
                  <strong>SPTECH, </strong> onde cursei análise e
                  desenvolvimento de sistemas, consegui colocar tudo isso em
                  prática e acabei me apaixonando por essa área, hoje em dia
                  desenvolvo aplicações usando:
                  <Text as="span" color={color.primary} fontWeight="semibold">
                    {''} html, css, sass, javascript, typescript, react js e
                    angular.
                  </Text>
                </Text>
              </Box>
            )}

            {card === 3 && (
              <Box className="animation-fade">
                <Text fontSize="md">Evolutix</Text>

                <Heading fontSize="3xl" fontWeight="semibold" my="3.5rem">
                  O que é a Evolutix ?
                </Heading>

                <Text fontSize="lg" textAlign="justify" fontWeight="semibold">
                  Ela é empresa na qual estou trabalhando atualmente, como
                  desenvolvedor front-end jr.
                </Text>

                <Text fontSize="md" textAlign="justify" mt="3.5rem">
                  Comecei no mercado de trabalho como estagiário da{' '}
                  <strong>Stefanini Brasil</strong> , uma grande e excelente
                  empresa onde desenvolvi diversas habilidades e boas práticas
                  na programação, atuei nesta empresa por volta de 1 ano e meio,
                  após isso consegui alcançar o cargo em que estou hoje
                  desenvolvedor jr na <strong>Evolutix</strong> , uma companhia
                  em expansão exponencial e tem uma grande proposta para o
                  futuro. Nela trabalho com aplicações que já estão sendo
                  colocadas em produção, atuo nas linguagens:
                  <Text as="span" color={color.primary} fontWeight="semibold">
                    {''} html, css, sass, typescript e angular.
                  </Text>
                </Text>
              </Box>
            )}
          </Box>
        </Flex>

        <span id="laboratorio"></span>
        <Flex
          as="section"
          flexDir="column"
          justify="start"
          align="center"
          wrap="wrap"
          mt="11rem"
          py="2rem"
          minH="100vh"
        >
          <Box textAlign="center" mb="10rem">
            <Heading
              fontSize="4xl"
              letterSpacing="0.2rem"
              fontWeight="semibold"
            >
              Últimos trabalhos
            </Heading>

            <Text fontSize="lg">Perfeitas soluções digitais.</Text>
          </Box>

          <Grid
            gap="3rem"
            templateColumns="repeat(auto-fill, minmax(346px, 1fr));"
            justifyContent="center"
          >
            <Works
              title="Hyper Xpress"
              description="Um e-commerce foconado na compra e troca de roupas usadas."
              img={imgHyper}
              colorTheme={color.primary}
              colorBg={color.bg}
            >
              <Flex
                flexDir="column"
                align="center"
                justify="stretch"
                textAlign="justify"
              >
                <Heading
                  fontSize="2xl"
                  letterSpacing="0.2rem"
                  my="2.5rem"
                  color={color.primary}
                >
                  Hyper Xpress
                </Heading>

                <Text w="80%" fontSize="md" mb="3rem">
                  Esse projeto consiste em um e-commerce de roupas usadas, ou
                  seja um brecho on-line onde os usuarios possam anunciar,
                  comprar e até mesmo trocar peças de roupas e calçados, foi uma
                  plataforma desenvolvida com meu grupo de TCC.
                </Text>

                <HStack spacing="1rem" wrap="wrap">
                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    React js
                  </Text>

                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    JS
                  </Text>

                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    Styled Components
                  </Text>
                </HStack>
              </Flex>
            </Works>

            <Works
              title="Hyper Xpress"
              description="Um e-commerce foconado na compra e troca de roupas usadas."
              img={imgHyper}
              colorTheme={color.primary}
              colorBg={color.bg}
            >
              <Flex
                flexDir="column"
                align="center"
                justify="stretch"
                textAlign="justify"
              >
                <Heading fontSize="2xl" letterSpacing="0.2rem" my="2.5rem">
                  Hyper Xpress
                </Heading>

                <Text w="80%" fontSize="md" mb="3rem">
                  Esse projeto consiste em um e-commerce de roupas usadas, ou
                  seja um brecho on-line onde os usuarios possam anunciar,
                  comprar e até mesmo trocar peças de roupas e calçados, foi uma
                  plataforma desenvolvida com meu grupo de TCC.
                </Text>

                <HStack spacing="1rem" wrap="wrap">
                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    React js
                  </Text>

                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    JS
                  </Text>

                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    Styled Components
                  </Text>
                </HStack>
              </Flex>
            </Works>

            <Works
              title="Hyper Xpress"
              description="Um e-commerce foconado na compra e troca de roupas usadas."
              img={imgHyper}
              colorTheme={color.primary}
              colorBg={color.bg}
            >
              <Flex
                flexDir="column"
                align="center"
                justify="stretch"
                textAlign="justify"
              >
                <Heading fontSize="2xl" letterSpacing="0.2rem" my="2.5rem">
                  Hyper Xpress
                </Heading>

                <Text w="80%" fontSize="md" mb="3rem">
                  Esse projeto consiste em um e-commerce de roupas usadas, ou
                  seja um brecho on-line onde os usuarios possam anunciar,
                  comprar e até mesmo trocar peças de roupas e calçados, foi uma
                  plataforma desenvolvida com meu grupo de TCC.
                </Text>

                <HStack spacing="1rem" wrap="wrap">
                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    React js
                  </Text>

                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    JS
                  </Text>

                  <Text
                    fontSize="sm"
                    p="0.5rem 1rem"
                    borderRadius="0.5rem"
                    border="1px solid"
                    borderColor={color.primary}
                    color={color.primary}
                  >
                    Styled Components
                  </Text>
                </HStack>
              </Flex>
            </Works>
          </Grid>
        </Flex>

        <span id="about"></span>
        <Grid
          mt="5rem"
          templateColumns="1fr 2fr"
          justifyItems="center"
          justifyContent="center"
        >
          <Box>
            <Circle
              w="18rem"
              h="18rem"
              border="4px solid"
              borderColor={color.primary}
            >
              <Image id="imgCircle" src={imgPerfil} alt="gitHub" />
            </Circle>
            <Heading mt="1rem" textAlign="center" fontSize="2xl">
              Victor Samir
            </Heading>

            {colorMode === 'light' ? (
              <Flex justify="space-around" mt="2rem" cursor="pointer">
                <Image src={imgGit} alt="gitHub" />
                <Image src={imgLinkedin} alt="linkeding" />
                <Image src={imgEmail} alt="email" />
              </Flex>
            ) : (
              <Flex justify="space-around" mt="2rem" cursor="pointer">
                <Image src={imgGitDark} alt="gitHub" />
                <Image src={imgLinkedinDark} alt="linkeding" />
                <Image src={imgEmailDark} alt="email" />
              </Flex>
            )}
          </Box>

          <Box w="80%">
            <Heading mb="1rem" fontSize="3xl">
              Sobre
            </Heading>
            <Text mb="3rem" fontWeight="bold" fontSize="xl">
              Conheça um pouco sobre mim
            </Text>
            <Text lineHeight="3rem" fontSize="md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad
              voluptate iste harum, doloribus suscipit quae modi ex nesciunt
              accusantium repellendus maiores rerum alias perspiciatis aliquam a
              deleniti eveniet dolorum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam ad voluptate iste harum, doloribus
              suscipit quae modi ex nesciunt accusantium repellendus maiores
              rerum alias perspiciatis aliquam a deleniti eveniet dolorum. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad
              voluptate iste harum, doloribus suscipit quae modi ex nesciunt
              accusantium repellendus maiores rerum alias perspiciatis aliquam a
              deleniti eveniet dolorum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam ad voluptate iste harum, doloribus
              suscipit quae modi ex nesciunt accusantium repellendus maiores
              rerum alias perspiciatis aliquam a deleniti eveniet dolorum.
            </Text>
          </Box>
        </Grid>
      </Container>

      <Flex minH="100vh"></Flex>
    </>
  );
};

export default Home;
