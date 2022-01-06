import React from 'react';
import Image from 'next/image';

import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';

interface Props {
  colorTheme: string;
  title: string;
  language1: string;
  language2: string;
  language3: string;
  description: string;
  img: any;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

const Works = ({
  colorTheme,
  title,
  language1,
  language2,
  language3,
  description,
  img,
  children,
  onClick,
}: Props) => {
  return (
    <>
      <Flex
        className="work"
        position="relative"
        w="30%"
        h="60vh"
        p="2rem 1rem"
        flexDir="column"
        align="start"
        justify="start"
        borderRadius="0.5rem"
        boxShadow="2xl"
        bg="blackAlpha.400"
        _before={{
          background: colorTheme,
        }}
      >
        <Box>
          <Image id="img" src={img} alt="work" />
        </Box>

        <Heading fontSize="2xl" mt="5rem">
          {title}
        </Heading>

        <Text w="90%" fontSize="md" mt="2rem">
          {description}
        </Text>

        <Flex
          w="100%"
          h="10rem"
          px="1rem"
          justify="space-between"
          align="center"
        >
          {/* <HStack>
            <Text
              fontSize="1.2rem"
              p="0.4rem 0.5rem"
              borderRadius="0.5rem"
              bg="blackAlpha.500"
            >
              {language1}
            </Text>

            <Text
              fontSize="1.2rem"
              p="0.4rem 0.5rem"
              borderRadius="0.5rem"
              bg="blackAlpha.500"
            >
              {language2}
            </Text>

            <Text
              fontSize="1.2rem"
              p="0.4rem 0.5rem"
              borderRadius="0.5rem"
              bg="blackAlpha.500"
            >
              {language3}
            </Text>
          </HStack> */}
        </Flex>
      </Flex>
    </>
  );
};

export default Works;
