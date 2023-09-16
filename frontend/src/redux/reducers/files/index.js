import { FILES_DATA } from "../../../constants";

const INITIAL_STATE = {
  isFetching: false,
  didInvalidate: false,
  user: {},
  token: false,
};

const filesDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FILES_DATA}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
      };
    case `${FILES_DATA}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case `${FILES_DATA}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export { filesDataReducer };
