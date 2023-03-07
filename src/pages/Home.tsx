import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import ProductCard from '../components/ProductCard/ProductCard';

function isProduct(product: unknown): product is Product {
  if (
    product &&
    typeof product === 'object' &&
    'id' in product &&
    typeof product.id === 'number' &&
    'title' in product &&
    typeof product.title === 'string' &&
    'price' in product &&
    typeof product.price === 'number' &&
    'description' in product &&
    typeof product.description === 'string' &&
    'category' in product &&
    typeof product.category === 'string' &&
    'image' in product &&
    typeof product.image === 'string' &&
    'rating' in product &&
    product.rating &&
    typeof product.rating === 'object' &&
    'rate' in product.rating &&
    typeof product.rating.rate === 'number' &&
    'count' in product.rating &&
    typeof product.rating.count === 'number'
  ) {
    return true;
  }
  return false;
}

function isProducts(products: unknown): products is Product[] {
  if (products && products instanceof Array && isProduct(products[0])) {
    return true;
  }
  return false;
}

function Home() {
  async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Problem fetching data');
    }
    const products = await response.json();
    if (!isProducts(products)) throw new Error('Not products');
    return products;
  }

  const { status, error, data } = useQuery<Product[], Error>(
    ['products', { id: 1 }],
    getProducts
  );

  if (status === 'loading') return <Text>Loading...</Text>;

  if (error) return <Text>{`An error has occurred:  ${error.message}`}</Text>;

  return (
    <Box display="flex" flexDir="column">
      <Box
        display="flex"
        p="20px 45px"
        borderBottom="1px solid"
        borderColor="gray.100"
      >
        <Heading as="h1" fontWeight="600" fontSize="32px" lineHeight="48px">
          eCommerce
        </Heading>
      </Box>
      <Grid
        templateColumns="repeat(5, 270px)"
        gridGap="32px"
        p="64px 34px"
        justifyContent="center"
      >
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
