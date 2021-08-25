import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoListUnordered } from "react-icons/go";
import "./Pagination.scss";

const Pagination = () => {
  const [sorted, setSorted] = useState(null);
  const [dataPerPage] = useState(5);

  const { filteredData } = useSelector((state) => state.fetching);
  const { visible } = useSelector((state) => state.visible);
  const { clicked } = useSelector((state) => state.clicked);
  const { openList } = useSelector((state) => state.openList);
  const { currentPage } = useSelector((state) => state.currentPage);
  const { currentButton } = useSelector((state) => state.currentButton);

  const dispatch = useDispatch();

  const orderByClickHandler = () => {
    dispatch({ type: "ClICK_TYPE", payload: true });
    dispatch({ type: "OPEN_LIST_TYPE", payload: !openList });
  };

  const prevButtonHandler = () => {
    dispatch({
      type: "CURRENT_BUTTON_TYPE",
      payload:
        currentPage === numberOfPages.length ? currentPage - 1 : currentPage,
    });
  };

  const currentButtonHandler = (page) => {
    dispatch({
      type: "CURRENT_BUTTON_TYPE",
      payload: page,
    });
  };

  const nextButtonHandler = () => {
    dispatch({
      type: "CURRENT_BUTTON_TYPE",
      payload:
        currentPage === numberOfPages.length ? currentPage : currentPage + 1,
    });
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const slicedFilteredData = filteredData.slice(
    indexOfFirstData,
    indexOfLastData
  );
  const totalPagesNum = Math.ceil(filteredData.length / dataPerPage);
  const numberOfPages = [];

  for (let i = 1; i <= totalPagesNum; i++) {
    numberOfPages.push(i);
  }

  useEffect(() => {
    dispatch({ type: "CURRENT_PAGE_TYPE", payload: currentButton });
  }, [currentButton, currentPage]);

  if (sorted === "nameAsc") {
    filteredData.sort(function (a, b) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });
  }

  if (sorted === "nameDesc") {
    filteredData.sort((a, b) => {
      if (a[0] > b[0]) {
        return -1;
      }
      if (a[0] < b[0]) {
        return 1;
      }
      return 0;
    });
  }

  if (sorted === "yearAsc") {
    filteredData.sort(function (a, b) {
      return a[3].slice(6, 10) - b[3].slice(6, 10);
    });
  }

  if (sorted === "yearDesc") {
    filteredData.sort(function (a, b) {
      return b[3].slice(6, 10) - a[3].slice(6, 10);
    });
  }

  return (
    <React.Fragment>
      {visible && clicked ? (
        <div className="order-container">
          <button
            className="order-container__title"
            onClick={orderByClickHandler}
          >
            <GoListUnordered className="order-container__icon" />
            Order By
          </button>
          {visible && clicked && openList ? (
            <div className="order-list-container">
              <button
                onClick={() => setSorted("nameAsc")}
                className="order-list-container__item item"
              >
                Name Ascending
              </button>
              <button
                onClick={() => setSorted("nameDesc")}
                className="order-list-container__item item"
              >
                Name Descending
              </button>
              <button
                onClick={() => setSorted("yearAsc")}
                className="order-list-container__item item"
              >
                Year Ascending
              </button>
              <button
                onClick={() => setSorted("yearDesc")}
                className="order-list-container__item item"
              >
                Year Descending
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
      {visible &&
        clicked &&
        slicedFilteredData.map((x) => (
          <div className="autocom-box" key={x.toString()}>
            <div className="autocom-box__item">
              <li>
                {x[4]} - {x[5]}
              </li>
              <li>
                {x[0]} - {x[3].slice(6, 10)}
              </li>
            </div>
            <div className="autocom-box__item">
              <li className="email">Email: {x[5]}</li>
            </div>
          </div>
        ))}
      {clicked && visible && filteredData.length !== 0 && (
        <>
          <ul className="pagination-container">
            <li
              className={
                currentButton === 1 ? "page-item disabled" : "page-item"
              }
            >
              <a href="#!" onClick={() => prevButtonHandler(currentPage)}>
                Prev
              </a>
            </li>
            {numberOfPages.map((page) => {
              return (
                <li
                  key={page.toString()}
                  className={currentButton === page ? "active" : ""}
                >
                  <a
                    href="#!"
                    className="page-link"
                    onClick={() => currentButtonHandler(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
            <li
              className={`${
                currentButton === numberOfPages.length
                  ? "page-item disabled"
                  : "page-item"
              }`}
            >
              <a
                href="#!"
                className="page-link"
                onClick={() => nextButtonHandler(currentPage)}
              >
                Next
              </a>
            </li>
          </ul>
        </>
      )}
    </React.Fragment>
  );
};

export default Pagination;
