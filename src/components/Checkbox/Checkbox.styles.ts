import styled from "styled-components";
import AcceptIcon from '../../assets/AcceptIcon.svg'


export const StyledCheckBox = styled.input`
  position: relative;
  appearance: none;
  outline: none;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border: 1.5px solid rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    cursor: pointer;
  }

  &:focus::before {
    border: 1.5px solid var(--purple);
  }

  &:hover::before {
    border: 1.5px solid var(--gray-dark);
  }

  &:checked::before {
    border: 1.5px solid var(--purple);
    
    background: var(--purple);
    background-image: url(${AcceptIcon});
    background-repeat: no-repeat;
    background-position:center;
  }
`;