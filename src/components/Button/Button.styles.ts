import styled, {css} from 'styled-components'
import {ButtonProps} from "./Button.interface";

export const StyledButton = styled.button<ButtonProps>`
  width: max-content;
  padding: 12px 16px;

  font-size: 14px;
  line-height: 20px;
  
  border: 1.5px solid transparent;
  background: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  
  ${props => {
    switch (props.appearance) {
      case 'primary':
        return css`
          color: var(--white);
          background: var(--purple);

          &:hover {
            background: #484BD5;
          }

          &:disabled {
            background: var(--purple-hover);
            color: #D5D5FE;
          }
        `
      case 'border':
        return css`
          color: var(--purple);
          border: 1.5px solid var(--purple);

          &:hover {
            border-color: #484BD5;
          }
          &:disabled{
            border-color: var(--purple-hover);
            color: var(--purple-hover);
          }
        `
    }
  }

  }
`