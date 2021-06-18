import { useCallback, useState } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
  ColorMode,
  ColorModeContext,
} from '@chakra-ui/react';

const Header: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  const [dark, setDark] = useState(false);
  const handleDarkMode = useCallback(() => {
    setDark(dark ? false : true);
    toggleColorMode();
  }, [toggleColorMode, setDark, dark]);

  const colors = {
    nav: useColorModeValue('whiteAlpha.900', 'gray.800'),
  };

  return (
    <Flex
      as="header"
      w="100%"
      h={['45px', '65px']}
      position="fixed"
      align="center"
      justify="center"
      mx="auto"
      px="12"
      bgColor={colors.nav}
    >
      <Flex
        w="100%"
        h="100%"
        maxW="1150px"
        px="4"
        align="center"
        justify="space-between"
      >
        <Heading fontWeight="semibold" fontSize={['sm', 'md', 'xl']}>
          Victor Samir
        </Heading>

        <Flex w="45%" justify="space-between" align="center">
          <Heading
            cursor="pointer"
            fontWeight="semibold"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#6B46C1' }}
          >
            Home
          </Heading>
          <Heading
            cursor="pointer"
            fontWeight="semibold"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#6B46C1' }}
          >
            About
          </Heading>
          <Heading
            cursor="pointer"
            fontWeight="semibold"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#6B46C1' }}
          >
            Services
          </Heading>
          <Heading
            cursor="pointer"
            fontWeight="semibold"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#6B46C1' }}
          >
            Contactme
          </Heading>
          <Heading
            cursor="pointer"
            fontWeight="semibold"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#6B46C1' }}
          >
            About
          </Heading>

          <Button
            size="sm"
            variant="ghost"
            _focus={{
              boxShadow: 'unset',
            }}
            onClick={handleDarkMode}
          >
            {!dark ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
