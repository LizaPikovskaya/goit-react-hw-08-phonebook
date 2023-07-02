import styled from 'styled-components';

export const List = styled.ul`
  /* padding: 0; */

  li {
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  & li:not(:last-child) {
    margin-bottom: 10px;
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    min-width: 80px;
    padding: 5px 10px;
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
