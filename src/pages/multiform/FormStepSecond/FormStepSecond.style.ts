import styled from "styled-components";
import RemoveIcon from '../../../assets/Remove.svg'
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Advantage = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  input{
    max-width: 300px;
  }
`
export const RemoveAdvantage = styled.button`
  width: 20px;
  height: 19px;
  
  border: none;
  background-color: transparent;
  background-image: url(${RemoveIcon});
  background-position: center center;
  
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  margin-top: 56px;
  
  display: flex;
  justify-content: space-between;
`
