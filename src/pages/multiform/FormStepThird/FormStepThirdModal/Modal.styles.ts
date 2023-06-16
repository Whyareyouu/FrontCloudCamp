import styled from 'styled-components'
import ModalSuccessIcon from "./ModalSuccesIcon";
import ErrorModalIcon from "./ErrorModalIcon";
import {Button} from "../../../../components";



export const ModalTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  
  color: var(--dark)
`
export const SuccessIcon = styled(ModalSuccessIcon)`
  box-sizing: content-box;
  padding: 26px;
`

export const ErrorIcon = styled(ErrorModalIcon)`
  box-sizing: content-box;
  padding: 26px;
`

export const ErrorButton = styled(Button)`
  align-self: flex-end;
`
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`