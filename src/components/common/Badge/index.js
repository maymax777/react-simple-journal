import styled, { css } from 'styled-components';

const Badge = styled.span`
  display: inline-flex;
  width: 56px;
  height: 56px;
  margin: 0 5px;
  border: ${(props) => !props.selected && '1.5px solid #ccc'};
  border-radius: 100px;
  color: #bbb;
  background: transparent;
  cursor: pointer;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
  transition: 0.5s ease;

  p {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    text-align: center;
    background: #f6f4f6;
  }

  ${(props) =>
    props.small &&
    css`
      font-size: 16px;
      font-weight: 500;
      width: 27px;
      height: 27px;
      border: 2px solid #fff;
      margin: 0 0 2px 0;
      background: ${props.status && 'white'};
      color: ${(props) => props.theme[props.status || 0].color};
    `}
  ${(props) =>
    !props.small &&
    props.status &&
    props.selected &&
    css`
      p {
        font-weight: 500;
        color: white;
        border: none;
        background: ${(props) => props.theme.color};
      }
    `};
`;

export default Badge;
