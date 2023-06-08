import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;

  padding: 12px;
  border: 1px solid var(--gray);
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
    border: 1px solid var(--purple);
  }
`