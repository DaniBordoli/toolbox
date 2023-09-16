import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { rootReducer } from "./reducers/index";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk, promise];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(createLogger());
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
