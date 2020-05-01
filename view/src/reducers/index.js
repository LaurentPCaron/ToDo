import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import toDoReducer from './todoReducer';

export default combineReducers({
  form: formReducer,
  Todos: toDoReducer,
});
