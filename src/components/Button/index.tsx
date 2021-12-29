import React from 'react';

import { Box, Button as Buttons } from '@chakra-ui/react';

interface Props {
  colorTheme: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}

const Button = ({ children, colorTheme, onClick }: Props) => {
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
        onClick={onClick}
      >
        {children}
      </Buttons>
    </>
  );
};

export default Button;
