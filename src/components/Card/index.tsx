import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

interface Props {
  colorTheme: string;
  colorBg: string;
  selected: boolean;
  title: string;
  description: string;
  projects: string;
  img: any;
  imgDark: any;
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
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
  children,
  onClick,
}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        w="100%"
        h="15rem"
        p="2rem 2.5rem"
        justify="space-between"
        align="start"
        borderRadius="0.8rem"
        boxShadow="3px 5px 25px #00000030"
        cursor="pointer"
        onClick={onClick}
        aria-selected={selected}
        transition="all 100ms ease-in-out"
        _selected={{
          border: '1px solid',
          transform: 'scale(1.025)',
          borderColor: colorTheme,
        }}
        _hover={{
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

        <Flex flexDir="column" align="end">
          <Box w="3rem" mt="1rem">
            {colorMode === 'light' ? (
              <Image src={img} alt="desing" />
            ) : (
              <Image src={imgDark} alt="desing" />
            )}
          </Box>

          <HStack w="100%" mt="4rem" spacing="1.5rem" opacity="0.8">
            {children}
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Card;
