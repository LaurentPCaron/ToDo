import React from 'react';
import { connect } from 'react-redux';

import TaskForm from '../organims/TaskForm';
import { newTodo } from '../actions';

const Add = (props) => {
  const onSubmit = (formValues) => {
    props.newTodo(formValues);
  };
  return (
    <div>
      <h1 align='center'>New task</h1>
      <TaskForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { newTodo })(Add);
