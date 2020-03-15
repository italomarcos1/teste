import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #191919;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    color: #d9d9d9;
    font-size: 48px;
    margin-top: 80px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  > div {
    margin-top: 40px;
    display: flex;
    width: 850px;
    justify-content: space-evenly;
    align-items: center;

    > span {
      max-width: 200px;
      font-size: 12px;
      color: #ccc;
      text-align: center;
      margin-left: 35px;

      strong {
        color: #d9d9d9;
        font-size: 16px;
        text-align: center;
      }
    }
  }

  ul {
    display: flex;
    flex: 1;
    padding: 15px 10px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 900px;
    background-color: #e6b32a;
    border-radius: 4px;

    list-style: none;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #444;
  height: 60px;
  border-radius: 6px;
  width: 800px;
  font-size: 20px;
  margin-right: 30px;
  margin-bottom: 20px;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${lighten(0.1, '#444')};
    width: 810px;
    height: 65px;
  }

  span {
    max-width: 100px;
    height: 40px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #ccc;
    text-align: center;

    margin-left: 2px;
    border-left: 1px solid #333;
    padding-left: 2px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex: 1;
      height: 25px;
    }
  }
`;
