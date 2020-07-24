import { createStore, combineReducers } from "redux";
import { Users } from "./users";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      users: Users,
    })
  );

  return store;
};
