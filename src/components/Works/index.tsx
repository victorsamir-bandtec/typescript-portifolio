import React from 'react';
import Image from 'next/image';

import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';

interface Props {
  img: any;
  title: string;
  colorTheme: string;
  colorBg: string;
  description: string;
  children?: React.ReactNode;
}

const Works = ({
  img,
  title,
  children,
  colorTheme,
  description,
  colorBg,
}: Props) => {
  return (
    <>
      <Flex
        className="work"
        position="relative"
        w="100%"
        h="60vh"
        p="2rem 1rem"
        flexDir="column"
        align="center"
        justify="start"
        textAlign="center"
        borderRadius="0.5rem"
        boxShadow="3px 5px 15px #00000030"
        _before={{
          background: colorTheme,
        }}
      >
        <Box borderBottom="1px solid" borderColor={colorTheme}>
          <Image id="imgWorks" src={img} alt="work" />
        </Box>

        <Heading fontSize="2xl" mt="5rem" color={colorTheme}>
          {title}
        </Heading>

        <Text w="90%" fontSize="md" mt="2rem">
          {description}
        </Text>

        <Flex
          className="workContent"
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          p="2rem 1rem"
          flexDir="column"
          align="center"
          justify="start"
          borderRadius="0.5rem"
          opacity="0"
          visibility="hidden"
          cursor="default"
          bg={colorBg}
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default Works;
