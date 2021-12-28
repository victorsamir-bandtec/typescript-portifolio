import React from 'react';

import { Box, Button as Buttons } from '@chakra-ui/react';

const Button: React.FC = ({ children }) => {
  return (
    <>
      <Buttons
        p="2rem 3.2rem"
        fontSize="md"
        borderRadius="0.5rem"
        border="1px solid #66fcf1"
        color="primary"
        bg="transparent"
      >
        {children}
      </Buttons>
    </>
  );
};

export default Button;
