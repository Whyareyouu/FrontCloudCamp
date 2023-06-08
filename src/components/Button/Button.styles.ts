import styled, {css} from 'styled-components'
import {ButtonProps} from "./Button.interface";

export const StyledButton = styled.button<ButtonProps>`
  width: max-content;
  padding: 12px 16px;

  font-size: 14px;
  line-height: 20px;
  
  border: 1.5px solid transparent;
  border-radius: 4px;
  outline: none;
  
  ${props => {
    switch (props.appearance) {
      case 'primary':
        return css`
          color: var(--white);
          background: var(--purple);
        `
      case 'border':
        return css`
          color: var(--purple);
          border: 1.5px solid var(--purple);

          &:hover {
            border-color: #484BD5;
          }
        `
    }
  }

  }
`