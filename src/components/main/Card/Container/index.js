import styled from 'styled-components';

const ListContainer = styled.div`
  height: 267px;
  max-height: 267px;
  flex: 1 1 auto;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default ListContainer;
