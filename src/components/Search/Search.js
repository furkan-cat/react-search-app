import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetching } from "../../store/actions/index";
import { BiSearchAlt } from "react-icons/bi";
import Pagination from "../Pagination/Pagination";
import "./Search.scss";

function Search() {
  const [isError, setIsError] = useState(false);
  const { filteredData, data } = useSelector((state) => state.fetching);
  const { visible } = useSelector((state) => state.visible);
  const { clicked } = useSelector((state) => state.clicked);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetching());
  }, []);

  const changeHandler = (e) => {
    let input = e.target.value;
    if (input.length >= 3) {
      const newData = filteredData.filter((item) =>
        item.toString().toLowerCase().includes(input.toString().toLowerCase())
      );
      dispatch({ type: "FilterAll", payload: newData });
      dispatch({ type: "VISIBLE_TYPE", payload: true });
      dispatch({ type: "ClICK_TYPE", payload: false });
      if (filteredData.length === 0) {
        setIsError(true);
      }
    } else {
      dispatch({ type: "CURRENT_PAGE_TYPE", payload: 1 });
      dispatch({ type: "FilterAll", payload: data });
      dispatch({ type: "VISIBLE_TYPE", payload: false });
      dispatch({ type: "ClICK_TYPE", payload: true });
      setIsError(false);
    }
  };

  const seeMoreClickHandler = () => {
    dispatch({ type: "ClICK_TYPE", payload: true });
    dispatch({ type: "OPEN_LIST_TYPE", payload: false });
  };

  return (
    <React.Fragment>
      <div>
        <div className="wrapper">
          <div className="search-input">
            <input

              className={isError ? "error" : ""}
              type="text" //
              onChange={(e) => changeHandler(e)}
              placeholder="Type to search"
            />
            <button className="icon">
              <BiSearchAlt>Search</BiSearchAlt>
            </button>
            {visible && !clicked
              ? filteredData.slice(0, 3).map((x, i) => (
                  <>
                    <div className={visible ? "autocom-box" : ""} key={i}>
                      <div className="autocom-box__item">
                        <li key={i}>
                          {x[4]} - {x[5]}
                        </li>
                      </div>
                      <div className="autocom-box__item">
                        <li>Email: {x[5]}</li>
                      </div>
                    </div>
                  </>
                ))
              : null}
            {filteredData.length > 1 && visible && !clicked ? (
              <button onClick={seeMoreClickHandler} className="more">
                See More...
              </button>
            ) : null}
            <Pagination seeMoreClickHandler={seeMoreClickHandler} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Search;
