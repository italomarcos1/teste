import styled from 'styled-components';
import Select from 'react-select/async';

export const TSelect = styled(Select)`
  margin-bottom: 15px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #111;
    border-radius: 4px;
    color: #333;
    background-color: #777;

    width: 200px;

    &::placeholder {
      color: #222;
    }

    > div {
      display: flex;
      justify-content: center;
      overflow: hidden;

      > div {
        color: #222;
      }
    }
  }
`;
