import styled from 'styled-components';

const CardContent = styled.div`
  position: relative;
  height: 100%;
  background: #fcfbfc;
  padding: 2.12rem;

  > textarea {
    background: transparent;
    width: 100%;
    height: 100%;
    color: #333;
    border: none;
    resize: none;
    outline: none;

    font-weight: normal;
    font-size: normal;
    font-size: 20px;

    &::placeholder {
      color: #959596;
    }
  }
`;

export default CardContent;
