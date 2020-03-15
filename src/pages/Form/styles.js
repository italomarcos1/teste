import styled from 'styled-components';
import { Form as TForm } from '@unform/web';
import { RadioButton as TRadioButton } from 'react-radio-buttons';

import { darken } from 'polished';

export const Container = styled.div`
  width: 700px;
  height: 800px;
  border: 4px solid #292929;
  border-radius: 4px;
  margin: 40px auto;
  padding: 30px;
  background: #444;
`;

export const Form = styled(TForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 50px;
    margin-bottom: 20px;
    color: #eee;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    label {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 60px;
      margin-right: 20px;

      svg {
        margin-left: 5px;
      }
    }
  }

  input {
    height: 45px;
    width: 400px;
    outline: 0;
    font-size: 18px;
    border: 1.5px solid #333;
    border-radius: 4px;
    padding: 2px 10px;
    background-color: #777;
    margin-bottom: 15px;

    &:hover {
      background-color: ${darken(0.08, '#777')};
      border: 1.8px solid #191919;
      border-radius: 4px;
    }
    &:focus {
      background-color: #e6b32a;
      border: 2.2px solid #191919;
      border-radius: 4px;
    }

    &::placeholder {
      color: #222;
    }
  }
`;

export const RadioButton = styled(TRadioButton)`
  width: 30px;
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.disabled,
}))`
  align-items: center;
  background: #e6b32a;
  border: 2px solid #252525;
  border-radius: 8px;
  color: #252525;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  height: 75px;
  width: 400px;

  justify-content: center;
  margin-top: 20px;
  padding: 0px 15px;
  transition: background 0.1s;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background-color: ${darken(0.065, '#e6b32a')};
    border: 3.3px solid #252525;
    border-radius: 10px;
  }
`;
