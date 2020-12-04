import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  height: 90px;
  width: 150px;
  min-width: 150px;
  padding: 16px 24px;
  cursor: pointer;
  margin-right: 19px;
  flex-grow: 0;
  background: #f6f6f6;
  backdrop-filter: blur(5px);
  border-radius: 1.3rem;
  direction: ltr;
  opacity: 0.5;

  border: ${(props) =>
    props.selected ? '4px solid #fff' : '4px solid #f6f6f6'};

  overflow: hidden;
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 0.3s;
  ${(props) =>
    props.selected &&
    css`
      opacity: 1 !important;
      box-shadow: 0 8px 16px 3px rgba(0, 0, 0, 0.6);
      transform: translateY(-3px) scale(1.05) rotateX(15deg);
    `}
  &:hover,
  &:active {
    opacity: 1 !important;
    box-shadow: 0 8px 16px 3px rgba(0, 0, 0, 0.6);
    transform: translateY(-3px) scale(1.05) rotateX(15deg);
  }

  &:nth-child(1) {
    opacity: 1;
  }
  &:nth-child(2) {
    opacity: 0.94;
  }
  &:nth-child(3) {
    opacity: 0.86;
  }
  &:nth-child(4) {
    opacity: 0.72;
  }
  &:nth-child(5) {
    opacity: 0.64;
  }
  &:nth-child(6) {
    opacity: 0.54;
  }
  &:nth-child(7) {
    opacity: 0.46;
  }
  &:nth-child(8) {
    opacity: 0.4;
  }
  &:nth-child(9) {
    opacity: 0.3;
  }
`;

export default CardContainer;
