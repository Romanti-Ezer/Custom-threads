import styled, { css } from 'styled-components';
import { devices } from '../shared/breakpoints';
import { getLayout } from '../shared/utils';
import { flexMixin } from '../shared/mixins';

const stickyCardUtility = css`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.cardBg};
  box-shadow: 1px 6px 2px -1px rgba(0, 0, 0, 0.09);
`;

const isCardUtility = ({ sticky }) => {
  if (sticky) {
    return stickyCardUtility;
  }
};

const baseCardSettings = css`
  width: ${({ w }) => w || 'initial'};
  height: ${({ h }) => h || 'auto'};
`;

export const Card = styled.div`
  padding: ${({ p }) => p || '2rem'};
  background: ${({ theme, BgClr }) => BgClr || theme.colors.cardBgClr};
  margin: ${({ customMargin }) => customMargin || 'auto'};
  text-align: ${({ textAlign }) => textAlign || 'initial'};
  position: ${({ customPosition }) => customPosition || 'static'};
  top: ${({ top }) => top || 'initial'};
  ${getLayout}
  ${baseCardSettings}
  ${isCardUtility}

  &>div {
    width: ${({ w }) => w || '100%'};
  }

  p {
    margin-block: 1rem;
  }
`;

export const ImageCard = styled.div`
  width: auto;
  height: auto;
  max-width: fit-content;
  max-height: fit-content;
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
  text-align: ${({ textAlign }) => textAlign || 'initial'};
  & > img {
    max-width: 30rem;
    height: 100%;
  }
`;

export const ItemCard = styled(Card)`
  height: 100%;
  width: 90%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBg};
  & > .img-wrapper {
    max-height: 25rem;
    width: 25rem;
    padding: 3rem;
  }

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
  h4 {
    text-align: center;
  }
  .price {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
  }
`;

export const DescriptionCard = styled(Card)`
  height: 100%;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBg};
  ${flexMixin('space-between', 'flex-start', 'column')};
  gap: 1rem;
  padding: 1rem;
  line-height: 1.75;
  text-align: center;
  p {
    letter-spacing: 0.1015rem;
    font-weight: 500;
  }
  & > .cta-wrapper {
    padding: 2rem;
    button {
      min-height: 2rem;
      max-width: 25rem;
    }
  }
`;
