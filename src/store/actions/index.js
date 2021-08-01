// export const visible = () => {
//   return {
//     type: "VISIBLE_TYPE",
//   };
// };

export const fetching = () => async (dispatch) => {
  try {
    let response = await fetch("../mockData.json");
    let data = await response.json();
    //
    dispatch({
      type: "FETCH_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error });
  }
};
