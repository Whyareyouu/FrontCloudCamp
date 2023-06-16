import styled from "styled-components";

type Props = {
    active: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 86px;
`;

export const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const StyledSpan = styled.span<Props>`
  position: absolute;
  top: 28px;

  color: ${props => props.active ? "var(--purple)" : '#666666'};
  font-size: 14px;
  line-height: 20px;
`

export const StepCircle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? 'var(--purple)' : '#A6A6A6')};
  color: white;
  font-weight: bold;
`;

export const Line = styled.div<Props>`
  margin:0 -8px;
  flex: 1;
  height: 8px;
  border-radius:8px;
  background-color: ${(props) => (props.active ? 'var(--purple)' : 'rgba(0, 0, 0, 0.08)')};
`;