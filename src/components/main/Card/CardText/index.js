import styled from 'styled-components';

const CardText = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  overflow: hidden;

  p {
    margin-top: 6px;
    color: #666;
    word-wrap: break-word;
    text-overflow: ellipsis;
  }
`;

export default CardText;
