import { Box, Link, Heading, Image, Text } from '@chakra-ui/react';
import { Rate } from 'antd';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Box
      maxW="270px"
      h="420px"
      borderRadius="12px"
      display="flex"
      flexDir="column"
      p="16px"
      boxSizing="border-box"
      backgroundColor="white"
      border="1px solid"
      borderColor="gray.100"
    >
      <Image
        src={product.image}
        alt={product.title}
        boxSize="180px"
        alignSelf="center"
        mb="16px"
      />
      <Heading
        as="h2"
        fontSize="15px"
        fontWeight="500"
        lineHeight="22px"
        color="black.font.title"
        mb="4px"
      >
        {product.title}
      </Heading>
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
        <Link
          href=" "
          p="12px"
          borderRadius="12px"
          backgroundColor="green.300"
          border="2px solid"
          borderColor="green.300"
          fontWeight="700"
          fontSize="15px"
          color="white"
          _hover={{ textDecor: 'none' }}
        >
          Buy now
        </Link>
      </Box>
    </Box>
  );
}

export default ProductCard;
