import axios from "axios";

export const actionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
};

export const set_Products = () => {
  return async (dispatch) => {
    const { data: payload } = await axios.get("http://localhost:4000/product");
    console.log(payload);
    dispatch({
      type: actionTypes.SET_PRODUCTS,
      payload,
    });
  };
};
