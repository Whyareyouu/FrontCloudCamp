import styled from 'styled-components'

type InputProps = {
    error?: boolean;
}

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const StyledInput = styled.input<InputProps>`
  width: 100%;

  padding: 12px;
  border: 1px solid ${props=> props.error ? "var(--error)" : "var(--gray)"};
  border-radius: 4px;

  font-size: 14px;
  line-height: 20px;

  color: var(--dark);

  outline: none;

  &::placeholder {
    color: var(--gray-dark)
  }

  &:hover {
    border: 1px solid var(--purple-hover);
  }

  &:focus {
    border: 1px solid ${props=> props.error ? "var(--error)" : "var(--purple)"};;
  }
`

export const Tip = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: var(--gray-dark)
`