import React from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';

const Container: React.FC = ({ children }) => {
  const [isMobile] = useMediaQuery(['(max-width: 580px)']);

  return (
    <>
      <Box w="100%" p="3rem 11rem">
        {children}
      </Box>
    </>
  );
};

export default Container;
