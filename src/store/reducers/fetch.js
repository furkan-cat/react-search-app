const INITIAL_STATE = {
  filteredData: [],
  message: "",
  data: [],
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, filteredData: action.payload, data: action.payload }; //
    case "FETCH_ERROR":
      return { ...state, message: action.payload };
    case "FilterAll":
      return { ...state, filteredData: action.payload };
    default:
      return state;
  }
};
export default fetchReducer;
