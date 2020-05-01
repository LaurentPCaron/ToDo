import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TaskForm from '../organims/TaskForm';
import { updateTodo, getTodo } from '../actions';

const Update = (props) => {
  useEffect(() => {
    props.getTodo(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  const onSubmit = (formValues) => {
    props.updateTodo(props.match.params.id, formValues);
  };

  if (!props.todo) {
    return null;
  }
  return (
    <div>
      <h1 align='center'>Edit task</h1>
      <TaskForm
        onSubmit={onSubmit}
        initialValues={_.pick(props.todo, 'description', 'deadLine')}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.Todos[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { updateTodo, getTodo })(Update);
