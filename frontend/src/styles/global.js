import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  margin: 0;
  border:0;
  outline:0;
  padding:0;
  box-sizing:border-box;

  html, body, #root {
    height: 100%;
  }

  *:focus{
    outline: 0;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  body {
    font: 18px Roboto, sans-serif;

      background: #191919;
      -webkit-font-smoothing: antialiased !important; /** deixa a fonte sem serrilhado. o !important dá override no browser */
     }

  a {
    text-decoration: none;
  }

  svg {
    user-select:none;
  }

  button {
    cursor: pointer;
    user-select:none;
  }
`;
