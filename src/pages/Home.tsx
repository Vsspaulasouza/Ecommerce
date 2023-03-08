import { Grid, Text } from '@chakra-ui/react';
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
  );
}

export default Home;
