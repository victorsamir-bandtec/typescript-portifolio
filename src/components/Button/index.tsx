import React from 'react';

import { Box, Button as Buttons } from '@chakra-ui/react';

const Button = ({ children, colorTheme }) => {
  return (
    <>
      <Buttons
        p="2rem 3.2rem"
        fontSize="md"
        borderRadius="0.5rem"
        border="1px solid"
        borderColor={colorTheme}
        color={colorTheme}
        bg="transparent"
      >
        {children}
      </Buttons>
    </>
  );
};

export default Button;
