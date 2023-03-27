import { Box, Heading, Image, Text, useToast } from '@chakra-ui/react';
import { InputNumber, Rate } from 'antd';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addProductToCart } from '../store/cartSlice';
import { useAppSelector, useAppDispatch } from '../store/store';

function Product() {
  const { productId } = useParams();

  const productsState = useAppSelector((state) => state.products);

  const [quantity, setQuantity] = useState<number>(1);

  const onChange = (value: number | null) => {
    if (value) setQuantity(value);
  };

  const dispatch = useAppDispatch();

  const toast = useToast();

  if (productsState.error)
    return (
      <Text>{`An error has occurred:  ${productsState.error.message}`}</Text>
    );

  if (!productId) return <Text>Produto sem id</Text>;

  const thisProduct = productsState.products.find(
    (prod) => prod.id === parseInt(productId, 10)
  );

  if (!thisProduct) return <Text>Produto não encontrado</Text>;

  const onClick = () => {
    dispatch(addProductToCart({ product: thisProduct, quantity }));
    toast({
      title: 'Product added to cart',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <Box display="flex" padding="50px 42px" gap="50px" justifyContent="center">
      <Image
        src={thisProduct.image}
        alt={thisProduct.title}
        boxSize="500px"
        alignSelf="center"
        draggable={false}
      />
      <Box
        w="65%"
        maxW="1000px"
        display="flex"
        flexDir="column"
        padding="24px 0"
      >
        <Heading
          as="h2"
          fontWeight="600"
          fontSize="32px"
          lineHeight="48px"
          color="black.font.title"
          mb="8px"
        >
          {thisProduct.title}
        </Heading>
        <Rate disabled allowHalf defaultValue={thisProduct.rating.rate} />
        <Text
          mt="40px"
          fontSize="17px"
          lineHeight="23px"
          color="black.font.description"
          mb="40px"
        >
          {thisProduct.description}
        </Text>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginTop="16px"
          justifySelf="flex-end"
        >
          <Heading
            as="p"
            fontWeight="600"
            fontSize="26px"
            lineHeight="39px"
            color="black.font.title"
            mr="24px"
          >
            {thisProduct.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'USD',
            })}
          </Heading>
          <InputNumber
            value={quantity}
            onChange={onChange}
            min={1}
            max={999}
            defaultValue={1}
            addonBefore="Qtd"
            size="large"
            style={{
              maxWidth: '120px',
              marginRight: '24px',
              textAlign: 'center',
            }}
          />
          <Text
            p="12px"
            borderRadius="12px"
            backgroundColor="green.300"
            border="2px solid"
            borderColor="green.100"
            fontWeight="700"
            fontSize="15px"
            color="white"
            _hover={{ textDecor: 'none' }}
            as={motion.div}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.9 }}
            cursor="pointer"
            onClick={onClick}
          >
            Buy now
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
