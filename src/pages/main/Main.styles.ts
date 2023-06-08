import styled from 'styled-components'
import FolderIcon from '../../assets/Folder.svg'

export const Wrapper = styled.div`
  max-width: 400px;
  
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  padding: 24px;
`

export const Name = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 8px;
`
export const List = styled.ul`
  display: flex;
  gap: 16px;

  list-style: none;

  li {
    display: flex;
    gap: 12px;

    &::before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      background-image: url(${FolderIcon})
    }
  }
`
export const Link = styled.a`
  font-size: 12px;
  line-height: 16px;

  color: var(--purple);
  text-decoration: none;

  &:hover {
    color: #484BD5;
  }
`