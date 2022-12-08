import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormStyled } from './FormStyled.styled';

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
        <label>
          Name
          <Field type="text" name="name" required placeholder="Enter name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Phone
          <Field type="tel" name="phone" required placeholder="Enter phone" />
          <ErrorMessage name="phone" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
