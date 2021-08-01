import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import visibleReducer from "./reducers/visible";
import fetchReducer from "./reducers/fetch";
import clickedReducer from "./reducers/click";
import openedListReducer from "./reducers/openList";
import currentPageReducer from "./reducers/currentPage";
import currentButtonReducer from "./reducers/currentButton";

export const allReducers = combineReducers({
  fetching: fetchReducer,
  visible: visibleReducer,
  clicked: clickedReducer,
  openList: openedListReducer,
  currentPage: currentPageReducer,
  currentButton: currentButtonReducer,
});

export const store = createStore(
  allReducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
