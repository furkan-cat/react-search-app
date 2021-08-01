const INITIAL_STATE = {
  currentButton: 1,
};

const currentButtonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CURRENT_BUTTON_TYPE":
      return { ...state, currentButton: action.payload };
    default:
      return state;
  }
};

export default currentButtonReducer;
