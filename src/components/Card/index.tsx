import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

interface Props {
  colorTheme: string;
  colorBg: string;
  selected?: boolean;
  title: string;
  description: string;
  projects: string;
  img: any;
  imgDark: any;
}

const Card = ({
  colorTheme,
  colorBg,
  selected,
  title,
  description,
  projects,
  img,
  imgDark,
}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        w="100%"
        h="15rem"
        p="2rem 3rem"
        justify="space-between"
        align="start"
        borderRadius="0.8rem"
        boxShadow="3px 5px 25px #00000030"
        cursor="pointer"
        aria-selected={selected}
        _selected={{
          border: '1px solid',
          borderColor: colorTheme,
        }}
        _hover={{
          boxShadow: '3px 5px 35px #00000060',
          bg: colorBg,
        }}
      >
        <Box>
          <Heading fontSize="2xl" fontWeight="normal" color={colorTheme}>
            {title}
          </Heading>

          <Text fontSize="md" fontWeight="normal">
            {description}
          </Text>

          <Text mt="3rem" fontSize="sm" fontWeight="semibold">
            {projects}
          </Text>
        </Box>

        <Box w="3rem" mt="1rem">
          {colorMode === 'light' ? (
            <Image src={img} alt="desing" />
          ) : (
            <Image src={imgDark} alt="desing" />
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Card;
