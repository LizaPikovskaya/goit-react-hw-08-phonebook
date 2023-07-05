import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  p {
    font-size: 22px;
    font-weight: 600;
    color: black;
    margin: 0;
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    min-width: 80px;
    padding: 10px ;
    border-radius: 5px;
    border: none;
    background-color: lightblue;
    cursor: pointer;
    transition: 300ms linear;
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 18px;

    &:hover {
      background-color: #4682b4;
      color: white;
    }
  }
`;
