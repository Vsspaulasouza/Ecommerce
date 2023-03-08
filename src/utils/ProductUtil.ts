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

function isProductArray(products: unknown): products is Product[] {
  if (products && products instanceof Array && isProduct(products[0])) {
    return true;
  }
  return false;
}

export { isProduct, isProductArray };
