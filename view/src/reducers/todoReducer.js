import _ from 'lodash';
import {
  NEW_TODO,
  GET_TODOS,
  GET_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_COMPLETED,
} from '../actions/type';

export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_COMPLETED:
    case NEW_TODO:
    case UPDATE_TODO:
    case GET_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case GET_TODOS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case DELETE_TODO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
