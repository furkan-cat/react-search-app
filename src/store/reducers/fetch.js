const INITIAL_STATE = {
  data: [],
  filteredData: [],
  message: "",
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, message: action.payload };
    case "FILTERED_TYPE":
      return { ...state, filteredData: action.payload };
    default:
      return state;
  }
};
export default fetchReducer;

