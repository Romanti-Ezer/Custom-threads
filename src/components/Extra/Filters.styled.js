import styled from 'styled-components';
import { flexMixin, transparentBlur } from '../shared/mixins';
import { labelStyle } from '../shared/styles/miscStyling';

const StyledFilters = styled.form`
  position: absolute;
  z-index: 20;
  padding: 1.25rem;
  margin-top: 3vh;
  left: -2vw;
  gap: 3rem;
  padding: 3rem;
  background: rgba(${({ theme }) => theme.colors.filtersRGB}, 1);
  ${flexMixin('center', 'flex-start', 'column')};
  ${transparentBlur};
  & > h3 {
    font-weight: 500;
  }
  & > div {
    width: 100%;
    position: relative;
    ${flexMixin('space-between', 'center', 'row')}
  }
  label {
    ${labelStyle}
  }
  .price > label {
    font-size: 2rem;
  }
  .selected-price {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default StyledFilters;
