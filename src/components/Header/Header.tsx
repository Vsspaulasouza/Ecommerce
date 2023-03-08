import { Box, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <Box
      display="flex"
      p="20px 45px"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <RouterLink to="/">
        <Heading as="h1" fontWeight="600" fontSize="32px" lineHeight="48px">
          eCommerce
        </Heading>
      </RouterLink>
    </Box>
  );
}

export default Header;
