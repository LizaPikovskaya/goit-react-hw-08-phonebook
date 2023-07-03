import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  margin-top: 20px;
  max-width: 40%;

  /* display:flex;
flex-direction:column;
gap: 20px;
align-items: start; */
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
  font-size: 22px;
`;
export const Input = styled(Field)`
  min-height: 40px;
  padding: 0px 5px;
  border-radius: 10px;
  border: 1.5px solid black;
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 125px;
  min-height: 45px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: lightblue;
  cursor: pointer;
  transition: 300ms linear;
  font-family: 'Helvetica Neue';
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background-color: #4682b4;
    color: white;
  }
`;
