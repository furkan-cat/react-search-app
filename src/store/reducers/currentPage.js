const INITIAL_STATE = {
  currentPage: 1,
};

const currentPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CURRENT_PAGE_TYPE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default currentPageReducer;
