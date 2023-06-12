import styled from "styled-components";


export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 84px;
  
  resize: vertical;
  
  border: 1px solid var(--gray);
  border-radius: 5px;
  
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark);
  
  outline: none;
  
  &:hover{
    border: 1px solid var(--purple-hover);
  }

  &:focus{
    border: 1px solid var(--purple-hover);
  }
  
  &::placeholder{
    color: var(--gray-dark);
  }
`