import { Box, Heading, IconButton, Image } from '@chakra-ui/react';
import { InputNumber } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { useAppDispatch } from '../../store/store';
import {
  changeQuantityOfProduct,
  removeProductInCart,
} from '../../store/cartSlice';

interface ProductCartProps {
  productCart: ProductCart;
}

function ProductCart({ productCart }: ProductCartProps) {
  const dispatch = useAppDispatch();

  const onChange = (product: Product, newQuantity: number | null) => {
    if (newQuantity)
      dispatch(changeQuantityOfProduct({ product, newQuantity }));
  };

  const onClickDelete = (product: Product) => {
    dispatch(removeProductInCart(product));
  };

  return (
    <Box
      key={productCart.product.id}
      display="grid"
      gridGap="24px"
      gridTemplateColumns="50px 230px auto"
    >
      <Image
        src={productCart.product.image}
        fallbackSrc={productCart.product.image}
        alt={productCart.product.title}
        boxSize="50px"
        draggable={false}
      />

      <Box display="flex" gap="24px" alignItems="center">
        <RouterLink to={`productCart.product/${productCart.product.id}`}>
          <Heading
            as="h4"
            w="100px"
            fontSize="15px"
            fontWeight="500"
            lineHeight="22px"
            color="black.font.title"
            cursor="pointer"
            _hover={{ textDecor: 'underline' }}
          >
            {`${productCart.product.title.substring(0, 20)}...`}
          </Heading>
        </RouterLink>
        <InputNumber
          value={productCart.quantity}
          onChange={(value: number | null) =>
            onChange(productCart.product, value)
          }
          min={1}
          max={999}
          addonBefore="Qtd"
          size="large"
          style={{
            width: '110px',
            textAlign: 'center',
          }}
        />
      </Box>

      <Box
        display="flex"
        gap="24px"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Heading
          as="p"
          maxW="151px"
          fontWeight="600"
          fontSize="20px"
          lineHeight="39px"
          color="black.font.title"
          textAlign="right"
        >
          {(productCart.product.price * productCart.quantity).toLocaleString(
            'pt-br',
            {
              style: 'currency',
              currency: 'USD',
            }
          )}
        </Heading>
        <IconButton
          aria-label="Delete"
          icon={<MdDeleteForever />}
          onClick={() => onClickDelete(productCart.product)}
        />
      </Box>
    </Box>
  );
}

export default ProductCart;
