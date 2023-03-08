import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { UseQueryResult } from 'react-query';
import ProductCard from '../components/ProductCard/ProductCard';

interface HomeProps {
  queryResult: UseQueryResult<Product[], Error>;
}

function Home({ queryResult }: HomeProps) {
  if (queryResult.status === 'loading') return <Text>Loading...</Text>;

  if (queryResult.error)
    return (
      <Text>{`An error has occurred:  ${queryResult.error.message}`}</Text>
    );

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
        {queryResult.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
