import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

import imgDesing from 'assets/desing.svg';
import imgDesingDark from 'assets/desingDark.svg';

const Card = ({ colorTheme }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        w="50rem"
        h="15rem"
        p="2rem 3rem"
        justify="space-between"
        align="start"
        borderRadius="0.8rem"
        border="1px solid"
        borderColor={colorTheme}
        boxShadow="3px 5px 40px #00000030"
      >
        <Box>
          <Heading fontSize="2xl" fontWeight="normal" color={colorTheme}>
            Desing
          </Heading>

          <Text fontSize="md" fontWeight="normal">
            Criador de projetos digitais unicos.
          </Text>

          <Text mt="3rem" fontSize="sm" fontWeight="semibold">
            5 projetos
          </Text>
        </Box>

        <Box w="3rem" mt="1rem">
          {colorMode === 'light' ? (
            <Image src={imgDesing} alt="desing" />
          ) : (
            <Image src={imgDesingDark} alt="desing" />
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Card;
