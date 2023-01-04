import { combineReducers } from "redux";
import productReducer from "./products.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});

export default rootReducer;
