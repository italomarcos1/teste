import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 700px;
  height: 400px;
  border: 4px solid #292929;
  border-radius: 4px;
  margin: 40px auto;
  padding: 30px;
  background: #444;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  img {
    width: 250px;
    height: 56px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 40px;
    color: #eee;
  }

  small {
    font-size: 20px;
    color: #eee;

    a {
      color: #e6b32a;

      &:hover {
        color: ${lighten(0.08, '#e6b32a')};
      }
    }
  }
`;
