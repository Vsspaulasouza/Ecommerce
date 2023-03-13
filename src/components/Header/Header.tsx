import { Box, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';

function Header() {
  return (
    <Box
      display="flex"
      p="20px 70px"
      borderBottom="1px solid"
      borderColor="gray.100"
      justifyContent="space-between"
    >
      <RouterLink to="/">
        <Heading as="h1" fontWeight="600" fontSize="32px" lineHeight="48px">
          eCommerce
        </Heading>
      </RouterLink>
      <CartButton />
    </Box>
  );
}

export default Header;
