import { combineReducers } from "redux";

import { filesDataReducer } from "./files";

const rootReducer = combineReducers({
  filesDataReducer,
});

export { rootReducer };
