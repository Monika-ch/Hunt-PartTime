import { PRODUCTS } from "../shared/products";
import { EXPENSES } from "../shared/expenses";
import { USERS} from '../shared/users';

export const initialState = {
  products: PRODUCTS,
  expenses: EXPENSES,
  users: USERS
};

export const Reducer = (state = initialState, action) => {
  return state;
};
