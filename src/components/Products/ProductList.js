import { useDispatch } from 'react-redux';
import { cartActions } from '../../features/cartSlice';

import Product from './Product';
import { StyledSection } from '../UI/Container.styled';
import { analytics } from '../../features/analytics';

const gridSettings = {
  cols: '1fr',
  rows: 'auto',
  gap: '3rem',
};

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = ({ id, title, price, image }) => {
    dispatch(cartActions.addItem({ id, title, price, image }));
    analytics.track('Add Item To Cart', { id, title, price, image });
  };

  return (
    <StyledSection className="products" as="ul" gridSettings={gridSettings}>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddItem={addItemToCartHandler} />
      ))}
    </StyledSection>
  );
};

export default ProductList;
