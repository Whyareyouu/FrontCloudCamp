import styled from 'styled-components';

export const CustomRadioButton = styled.label`
  display: inline-flex;
  padding-left: 24.5px;
  
  position: relative;
  cursor: pointer;
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: 1.5px solid rgba(0, 0, 0, 0.24);
    border-radius: 50%;
  }

  .checkmark::after {
    content: '';
    position: absolute;
    display: none;
  }

  input[type='radio']:checked ~ .checkmark {
    border: 1.5px solid var(--purple);
  }

  input[type='radio']:hover ~ .checkmark {
    border:1.5px solid var(--gray-dark);
  }

  input[type='radio']:checked ~ .checkmark::after {
    display: block;
  }

  .checkmark::after {
    top: 2.5px;
    left: 2.5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--purple);
  }
`;

export const CustomRadioInput = styled.input.attrs({ type: 'radio' })`
    display: none;
`;

export const CustomRadioText = styled.span`
  margin-top: -2.5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark);
`;