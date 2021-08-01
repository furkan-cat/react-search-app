const INITIAL_STATE = {
  openList: false,
};

const openedListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_LIST_TYPE":
      return { ...state, openList: action.payload };
    default:
      return state;
  }
};

export default openedListReducer;
