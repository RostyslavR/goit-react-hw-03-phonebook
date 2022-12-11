import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 400px;
  margin: 0 auto 10px;
  border: dashed gray;
`;

export const Input = styled(Field)`
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  text-align: start;
`;
