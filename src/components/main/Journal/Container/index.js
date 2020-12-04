import styled from 'styled-components';

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  background: #fcfbfc;
  box-shadow: 0px 20px 100px 10px rgba(0, 0, 0, 0.12);
  border-radius: 20px;

  -webkit-animation: slideInFromLeft 1s ease-out 0s 1;
  animation: slideInFromLeft 1s ease-out 0s 1;
`;

export default CardContainer;
