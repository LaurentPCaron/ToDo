import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import TextField from '../molecules/TextField';

const TaskForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <div className='form-row'>
          <Field
            label='Description'
            name='description'
            cy='cyTxtBoxDescription'
            type='text'
            component={TextField}
            required
          />
        </div>
        <div>{props.description}</div>

        <div className='form-row'>
          <Field
            label='Deadline'
            name='deadLine'
            cy='cyTxtBoxDeadline'
            type='date'
            component={TextField}
          />
        </div>

        <div className='form-row'>
          <button
            data-test='cyBtnAdd'
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>

          <Link data-test='cyBtnCancel' className='btn btn-danger' to='/'>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const error = {};
  if (!formValues.description) error.description = 'Title required';
  return error;
};

export default reduxForm({ form: 'todoForm', validate })(TaskForm);
