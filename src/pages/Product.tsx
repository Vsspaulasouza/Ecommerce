import { Text } from '@chakra-ui/react';
import { UseQueryResult } from 'react-query';
import { useParams } from 'react-router-dom';

interface ProductProps {
  queryResult: UseQueryResult<Product[], Error>;
}

function Product({ queryResult }: ProductProps) {
  const { productId } = useParams();

  if (queryResult.error)
    return (
      <Text>{`An error has occurred:  ${queryResult.error.message}`}</Text>
    );

  if (!productId) return <Text>Produto sem id</Text>;

  const thisProduct = queryResult.data?.find(
    (prod) => prod.id === parseInt(productId, 10)
  );

  return <div>Product {thisProduct?.title}</div>;
}

export default Product;
