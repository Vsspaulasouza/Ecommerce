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

function Cart() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Cart</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Heading as="h3" size="md">
            Cart
          </Heading>
        </PopoverHeader>
        <PopoverBody>Content</PopoverBody>
        <PopoverFooter>
          <RouterLink to="/checkout">
            <Button>Checkout</Button>
          </RouterLink>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default Cart;
