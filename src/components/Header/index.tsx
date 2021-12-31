import { useCallback, useState } from 'react';
import usePersisted from 'hooks/usePersisted';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import Container from 'components/Container';

const Header = ({ colorTheme }) => {
  const { toggleColorMode } = useColorMode();
  const [dark, setDark] = useState(false);

  const handleDarkMode = useCallback(() => {
    setDark(dark ? false : true);

    toggleColorMode();
  }, [toggleColorMode, setDark, dark]);

  return (
    <Flex
      as="header"
      h={['45px', '65px']}
      mt="10"
      align="center"
      justify="center"
      bgColor="transparent"
    >
      <Container>
        <Flex w="100%" h="100%" align="center" justify="space-between">
          <Heading fontWeight="semibold" fontSize={['sm', 'md', 'xl']}>
            <Text as="span" color={colorTheme}>
              {'</ '}
            </Text>
            Samir
            <Text as="span" color={colorTheme}>
              {' >'}
            </Text>
          </Heading>

          <Flex w="50%" justify="space-between" align="center">
            <Text
              className="active"
              cursor="pointer"
              fontSize={['sm', 'md', 'lg']}
              _hover={{ color: colorTheme }}
              _after={{
                background: colorTheme,
              }}
            >
              Sobre
            </Text>

            <Text
              as="a"
              href="#skils"
              cursor="pointer"
              fontSize={['sm', 'md', 'lg']}
              _hover={{ color: colorTheme }}
            >
              Skills
            </Text>

            <Text
              cursor="pointer"
              fontSize={['sm', 'md', 'lg']}
              _hover={{ color: colorTheme }}
            >
              Laboratório
            </Text>

            <Text
              cursor="pointer"
              fontSize={['sm', 'md', 'lg']}
              _hover={{ color: colorTheme }}
            >
              Contato
            </Text>

            <Button size="lg" variant="ghost" onClick={handleDarkMode}>
              {dark ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
