import api from '../api';
import history from '../history';
import {
  NEW_TODO,
  GET_TODOS,
  GET_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_COMPLETED,
} from './type';

export const newTodo = (formValues) => async (dispatch) => {
  const response = await api.post('/todos', {
    ...formValues,
    completed: false,
  });

  dispatch({ type: NEW_TODO, payload: response.data });
  history.push('/');
};

export const getTodos = () => async (dispatch) => {
  const response = await api.get('/todos');
  dispatch({ type: GET_TODOS, payload: response.data });
};

export const getTodo = (id) => async (dispatch) => {
  const response = await api.get(`/todos/${id}`);
  dispatch({ type: GET_TODO, payload: response.data });
};

export const deleteTodo = (id) => async (dispatch) => {
  await api.delete(`/todos/${id}`);
  dispatch({ type: DELETE_TODO, payload: id });
  history.push('/');
};

export const updateTodo = (id, formValues) => async (dispatch) => {
  const response = await api.patch(`/todos/${id}`, formValues);
  dispatch({ type: UPDATE_TODO, payload: response.data });
  history.push('/');
};

export const toggleCompleted = (id, completed) => async (dispatch) => {
  const response = await api.patch(`/todos/${id}`, {
    completed,
  });

  dispatch({ type: TOGGLE_COMPLETED, payload: response.data });
  history.push('/');
};
