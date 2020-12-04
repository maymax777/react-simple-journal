import styled from 'styled-components';

const CardFooter = styled.div`
  display: flex;
  height: 83px;
  position: relative;
  justify-content: space-between;
  padding: 1rem 2.3125rem 1.6875rem 2.3125rem;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 2.3rem;
    left: 2.3rem;
    border-top: 1px solid #e1dcdc;
  }
`;

export default CardFooter;
