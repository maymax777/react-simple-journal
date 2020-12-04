import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  border-radius: 12px;
  background: inherit;
  width: 9.81rem;
  height: 3.18rem;
  font-size: 1rem;
  transition: 0.25s ease;
  outline: none;
  border: 1px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};

  &:hover,
  &:active {
    box-shadow: 0 8px 16px 3px rgba(0, 0, 0, 0.6);
    transform: translateY(-1px) scale(1.05) rotateX(5deg);
  }

  &:hover {
    color: white;
    background: ${(props) => props.theme.color};
  }
`;

export default Button;
