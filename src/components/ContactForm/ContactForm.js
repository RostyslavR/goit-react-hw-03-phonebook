import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormStyled, Input, Label } from './FormStyled.styled';

const initialValues = {
  name: '',
  phone: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.number('Phone number must be a "Number" type').required(
    'Please, enter valid Phone Number'
  ),
});

export const ContactForm = ({ handleAdd }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleAdd}
    >
      <FormStyled>
        <Label>
          Name
          <Input type="text" name="name" required placeholder="Enter name" />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Phone
          <Input type="tel" name="phone" required placeholder="Enter phone" />
          <ErrorMessage name="phone" component="div" />
        </Label>
        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
