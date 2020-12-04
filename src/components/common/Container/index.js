import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.backgroundColor};
  width: 100%;
  min-width: 570px;
  height: 100vh;
  justify-content: center;
  align-content: center;
  opacity: 0.7;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export default Container;
