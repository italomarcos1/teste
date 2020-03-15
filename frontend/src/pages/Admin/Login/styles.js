import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 400px;
  height: 500px;
  background-color: #eee;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 250px;
    height: 56px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      padding: 2px 10px;
      height: 40px;
      width: 350px;
      margin-bottom: 10px;
    }

    button {
      margin-top: 30px;
      width: 350px;
      height: 50px;
    }
  }
`;
