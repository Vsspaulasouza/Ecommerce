import { Grid, Text } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton/ProductSkeleton';
import { useAppSelector } from '../store/store';

function Home() {
  const productsState = useAppSelector((state) => state.products);

  const loadingElement = (
    <>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </>
  );

  if (productsState.error)
    return (
      <Text>{`An error has occurred:  ${productsState.error.message}`}</Text>
    );

  return (
    <Grid
      templateColumns="repeat(5, 270px)"
      gridGap="32px"
      p="64px 34px"
      justifyContent="center"
    >
      {productsState.loading
        ? loadingElement
        : productsState.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </Grid>
  );
}

export default Home;
