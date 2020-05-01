import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Item from '../molecules/Item';
import BtnIcon from '../molecules/BtnIcon';

import { getTodos } from '../actions/index';

const Items = (props) => {
  const [iconVisble, setIconVisible] = React.useState('visibility_off');
  const [completedVisible, setCompletedVisible] = React.useState(false);
  const [todos, setTodos] = React.useState([]);

  const triggerVisible = () => {
    completedVisible
      ? setIconVisible('visibility_off')
      : setIconVisible('visibility');
    setCompletedVisible(!completedVisible);
  };

  useEffect(() => {
    setTodos(props.getTodos());
    // eslint-disable-next-line
  }, []);

  const renderItems = () => {
    if (todos) {
      return props.todos.map((todo) => {
        if (todo.completed && !completedVisible) return null;
        return (
          <Item
            id={todo.id}
            description={todo.description}
            deadLine={todo.deadLine}
            completed={todo.completed}
            key={todo.id}
          />
        );
      });
    }
  };

  return (
    <div data-test='cyItems' style={{ margin: 'auto' }}>
      <table className='table shadow p-3 mb-5 bg-white rounded '>
        <thead>
          <tr data-test='cyItemHeader'>
            <th>ID</th>
            <th>
              Complete
              <BtnIcon icon={iconVisble} onClick={triggerVisible} />
            </th>
            <th>Description</th>
            <th>Date du</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.Todos),
  };
};

export default connect(mapStateToProps, { getTodos })(Items);
