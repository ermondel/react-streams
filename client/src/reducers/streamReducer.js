import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      const updatedState = { ...state };
      if (updatedState[action.payload]) {
        delete updatedState[action.payload];
      }
      return updatedState;

    case FETCH_STREAMS:
      const nextState = { ...state };
      action.payload.forEach((obj) => {
        nextState[obj.id] = obj;
      });
      return nextState;

    default:
      return state;
  }
};

export default streamReducer;
