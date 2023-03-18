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
        <PopoverBody display="flex" flexDir="column" gap="10px">
          {cartState.products.map((productCart) => (
            <ProductCart
              key={productCart.product.id}
              productCart={productCart}
            />
          ))}
        </PopoverBody>
        <PopoverFooter display="flex" p="10px 24px" justifyContent="flex-end">
          <RouterLink to="/checkout">
            <Button rightIcon={<BiRightArrowAlt />}>Checkout</Button>
          </RouterLink>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default Cart;
