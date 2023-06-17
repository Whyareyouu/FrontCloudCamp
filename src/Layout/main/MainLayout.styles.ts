import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 24px auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
export const Container = styled.div`
    padding: 62px 110px 80px;
  @media screen and (max-width: 400px){
    padding: 20px;
  }
`