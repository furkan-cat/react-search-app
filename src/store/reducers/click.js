const INITIAL_STATE = {
  clicked: false,
};

const clickedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ClICK_TYPE":
      return { ...state, clicked: action.payload };
    default:
      return state;
  }
};

export default clickedReducer;
