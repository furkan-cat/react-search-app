const INITIAL_STATE = {
  visible: false,
};

const visibleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "VISIBLE_TYPE":
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};

export default visibleReducer;
