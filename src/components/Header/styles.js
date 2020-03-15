import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 15px;
      border-right: 1px solid #eee;
      padding-right: 15px;

      width: 125px;
      height: 28px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  align-items: center;

  div {
    margin-right: 10px;
    border-right: 1px solid #eee;
    padding-right: 10px;

    strong {
      color: #333;
      font-size: 14px;
    }
  }

  svg {
    margin-top: 2px;
    font-size: 12px;
    color: #f64c75;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
      color: ${darken(0.15, '#f64c75')};
    }
  }
`;
