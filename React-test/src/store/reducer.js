import { FETCH_DATA_SUCCESS } from "./action";

const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default rootReducer;