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

function CartButton() {
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
          <Button>Checkout</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default CartButton;
