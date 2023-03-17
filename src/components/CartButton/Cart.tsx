import {
  Button,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useAppSelector } from '../../store/store';
import ProductCart from '../ProductCart/ProductCart';

function Cart() {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <Popover>
      <PopoverTrigger>
        <Button rightIcon={<FaShoppingCart />}>Cart</Button>
      </PopoverTrigger>
      <PopoverContent marginRight="20px" maxW="580px" w="fit-content">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Heading as="h3" size="md">
            Cart
          </Heading>
        </PopoverHeader>
        <PopoverBody>
          {cartState.products.map((productCart) => (
            <ProductCart
              key={productCart.product.id}
              productCart={productCart}
            />
          ))}
        </PopoverBody>
        <PopoverFooter
          display="flex"
          justifyContent="space-between"
          p="8px 24px"
        >
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
          <RouterLink to="/checkout">
            <Button rightIcon={<BiRightArrowAlt />}>Checkout</Button>
          </RouterLink>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default Cart;
