import { Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 350px;
  margin: 0 auto 10px;
  border: dashed gray;
`;
