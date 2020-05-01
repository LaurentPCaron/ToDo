import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteTodo, toggleCompleted } from '../actions/index';

import CheckBox from '../atoms/CheckBox';
import BtnIcon from '../molecules/BtnIcon';

const Item = (props) => {
  const onDelete = () => {
    return function () {
      props.deleteTodo(props.id);
    };
  };

  const toggleCompleted = () => {
    return function () {
      props.toggleCompleted(props.id, !props.completed);
    };
  };
  return (
    <tr>
      <td data-test='cyItemId'>{props.id}</td>
      <td data-test='cyItemCheckBox'>
        <CheckBox completed={props.completed} onChange={toggleCompleted()} />
      </td>
      <td data-test='cyItemDescription'>{props.description}</td>
      <td data-test='cyItemDate'>{props.deadLine}</td>
      <td data-test='cyItemEditBtn'>
        <Link to={`/todo/edit/${props.id}`}>
          <BtnIcon icon='edit' iconColor='green' iconSize='30' />
        </Link>
      </td>
      <td data-test='cyItemDeleteBtn'>
        <BtnIcon
          onClick={onDelete()}
          icon='delete'
          iconColor='red'
          iconSize='30'
        />
      </td>
    </tr>
  );
};

export default connect(null, { deleteTodo, toggleCompleted })(Item);
