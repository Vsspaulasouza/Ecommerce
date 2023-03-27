import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Rate } from 'antd';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Box
      maxW="270px"
      h="450px"
      borderRadius="12px"
      display="flex"
      flexDir="column"
      p="16px"
      boxSizing="border-box"
      backgroundColor="white"
      border="1px solid"
      borderColor="gray.100"
      justifyContent="space-between"
    >
      <Image
        src={product.image}
        alt={product.title}
        boxSize="180px"
        alignSelf="center"
        mb="16px"
        draggable={false}
      />
      <RouterLink to={`product/${product.id}`}>
        <Heading
          as="h2"
          fontSize="15px"
          fontWeight="500"
          lineHeight="22px"
          color="black.font.title"
          mb="4px"
          cursor="pointer"
          _hover={{ textDecor: 'underline' }}
        >
          {`${product.title.substring(0, 50)}...`}
        </Heading>
      </RouterLink>
      <Text
        fontSize="12px"
        lineHeight="16px"
        color="black.font.description"
        mb="12px"
      >
        {`${product.description.substring(0, 70)}...`}
      </Text>
      <Rate disabled allowHalf defaultValue={product.rating.rate} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="16px"
        justifySelf="flex-end"
      >
        <Heading
          as="p"
          fontWeight="600"
          fontSize="18px"
          lineHeight="27px"
          color="black.font.title"
        >
          {product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'USD',
          })}
        </Heading>
        <RouterLink to={`product/${product.id}`}>
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
          >
            Buy now
          </Text>
        </RouterLink>
      </Box>
    </Box>
  );
}

export default ProductCard;
