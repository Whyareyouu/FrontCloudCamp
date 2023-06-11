import styled from 'styled-components'

type LableProps = {
    direction: 'row' | 'column';
    gap: number;
}

export const CustomLabel = styled.label<LableProps>`
  display: flex;
  flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
  gap: ${props => props.gap || 0}px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: var(--dark);
`