import styled from 'styled-components';
import { darken } from 'polished';
import { mvColors, gradients } from '../styles/colors';

const Button = styled.button`
  background: ${({ bgColor }) => gradients[bgColor]};
  border: none;
  border-radius: 5px;
  color: ${({ fontColor }) => mvColors[fontColor]};
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  line-height: 40px;
  font-weight: 400;
  box-shadow: 1px 8px 10px 5px gray;
  margin: 8px 0;
  outline: none;
  padding: 0px 20px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background-position: right center;
  }
`;

Button.defaultProps = {
  bgColor: 'quepal',
  fontColor: 'white'
}

export default Button;