import styled from "styled-components";


export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 84px;
  padding: 12px;
  
  resize: vertical;

  border: 1px solid var(--gray);
  border-radius: 5px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark);

  outline: none;

  &:hover {
    border: 1px solid var(--purple-hover);
  }

  &:focus {
    border: 1px solid var(--purple-hover);
  }

  &::placeholder {
    color: var(--gray-dark);
  }
`
export const CountOfLetters = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: var(--gray);
  
  align-self: flex-end;
`
export const Tip = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: var(--gray-dark)
`

export const MessagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`