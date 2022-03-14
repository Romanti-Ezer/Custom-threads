import { ItemCard, DescriptionCard } from './Product.styled';
import { CtaButton, StyledLink, StyledUtilityBtn } from '../UI/Button.styled';
import { AiOutlineArrowLeft, AiOutlineEye } from 'react-icons/ai';

const Product = ({ product, onAddItem, onGoBack, isDetails, asElement }) => {
  if (!product) return <p></p>;

  const seeMoreDetailsButton = (
    <StyledLink to={`/product-details/product-${product.id}`}>
      <span>See more</span>
      <span className="smallIcon">
        <AiOutlineEye />
      </span>
    </StyledLink>
  );

  const takeMeBackButton = (
    <StyledUtilityBtn onClick={onGoBack} as="a" title="Go back">
      <span className="icon smallIcon">
        <AiOutlineArrowLeft />
      </span>
      <span className="text">Take me back</span>
    </StyledUtilityBtn>
  );

  const productInfo = isDetails ? (
    <h2 title={product.title}>{product.title}</h2>
  ) : (
    <h3 title={product.title}>{product.title}</h3>
  );

  return (
    <ItemCard isDetails={isDetails} as={asElement || 'li'} p="1rem">
      <div className="img-wrapper">
        <img src={product.image} alt={`${product.title} visual placeholder`} />
      </div>
      <DescriptionCard isDetails={isDetails} className="description" as="article">
        <div className="info-wrapper">
          {productInfo}
          {isDetails && <p className="prod-desc">{product.description}</p>}
          <p className="price">${product.price}</p>
        </div>
        <div className="cta-wrapper">
          <CtaButton ctaAltHover onClick={onAddItem.bind(null, product)} title="Add this item to your cart">
            Add to Cart
          </CtaButton>
          {!isDetails && seeMoreDetailsButton}
          {isDetails && takeMeBackButton}
        </div>
      </DescriptionCard>
    </ItemCard>
  );
};

export default Product;
