import { Box, Heading } from '@chakra-ui/react';
import { Empty } from 'antd';
import ProductCart from '../components/ProductCart/ProductCart';
import { useAppSelector } from '../store/store';

function Checkout() {
  const cartState = useAppSelector((state) => state.cart);
  return (
    <Box
      maxW="580px"
      m="40px"
      p="20px"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="12px"
      display="flex"
      flexDir="column"
      gap="10px"
    >
      {cartState.products.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No products in cart"
        />
      ) : (
        cartState.products.map((productCart) => (
          <ProductCart key={productCart.product.id} productCart={productCart} />
        ))
      )}
      <Box
        display="flex"
        justifyContent="space-between"
        mt="30px"
        pt="10px"
        borderTop="1px solid"
        borderColor="gray.100"
      >
        <Heading
          as="p"
          fontWeight="600"
          fontSize="20px"
          lineHeight="39px"
          color="black.font.title"
          mr="24px"
        >
          Amount:
        </Heading>
        <Heading
          as="p"
          fontWeight="600"
          fontSize="20px"
          lineHeight="39px"
          color="black.font.title"
          mr="24px"
        >
          {cartState.amount.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'USD',
          })}
        </Heading>
      </Box>
    </Box>
  );
}

export default Checkout;
