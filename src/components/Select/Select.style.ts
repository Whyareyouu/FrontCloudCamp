import styled from 'styled-components';
import ArrowDownIcon from './ArraowDown.png'

type SelectButtonProps = {
    isOpen: boolean;
    error?: boolean;
}

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button<SelectButtonProps>`
  width: 100%;
  background-color: #fff;
  border: 1px solid ${props=> props.error ? "var(--error)" : "var(--gray)"};
  border-radius: 5px;

  padding: 12px;

  cursor: pointer;

  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: var(--dark);

  &::after {
    content: '';
    display: block;
    
    width: 20px;
    height: 20px;
    
    background-image: url(${ArrowDownIcon});
    
    position: absolute;
    right: 12px;
    top: 12px;
    transform: rotate(${props => props.isOpen ? '180deg' : '0'});
  }

  &:hover {
    border-color: var(--purple-hover);
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 47px;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-radius:4px;
`;

export const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-light);
  }
`;
export const Tip = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: var(--gray-dark)
`