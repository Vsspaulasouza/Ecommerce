import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';

interface ProductBreadcrumbProps {
  productId: number;
  productName: string;
}

function ProductBreadcrumb({ productId, productName }: ProductBreadcrumbProps) {
  return (
    <Breadcrumb
      ml="25px"
      spacing="8px"
      separator={<BiChevronRight color="gray.500" />}
    >
      <BreadcrumbItem>
        <RouterLink to="/">Products</RouterLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <RouterLink to={`/product/${productId}`}>{productName}</RouterLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default ProductBreadcrumb;
