import React from "react";
import { Container } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";
import HomeAllProductViewLogic from "../../logic/Products/HomeAllProductViewLogic";

const DropDownWithHeader = ({ numberOfProducts }) => {
  const [items1, items2, Search, word, sortData] = HomeAllProductViewLogic();
  const handler = () => {};

  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    Search();
  };

  return (
    <Container>
      <div className="sort-container">
        <div>
          <h3>
            <span>{numberOfProducts}</span> Product ...
          </h3>
        </div>
        <div className="sort">
          <UnopDropdown
            onAppear={handler}
            onDisappearStart={handler}
            trigger={
              <p className="mx-1">
                <i class="fa-solid fa-arrow-down-short-wide"></i>
                Sort By ..
              </p>
            }
            delay={0}
            align="CENTER"
            hover
          >
            <div className="card-filter">
              <div
                onClick={() => clickMe("")}
                className="border-bottom card-filter-item"
              >
                No Sort
              </div>
              <div
                onClick={() => clickMe("Most sales")}
                className="border-bottom card-filter-item"
              >
                Most sales
              </div>
              <div
                onClick={() => clickMe("Higher Rating")}
                className="border-bottom card-filter-item"
              >
                Higher Rating
              </div>
              <div
                onClick={() => clickMe("Price Acourding")}
                className="border-bottom card-filter-item"
              >
                Price Acourding
              </div>
              <div
                onClick={() => clickMe("Price Decording")}
                className=" card-filter-item"
              >
                Price Decording
              </div>
            </div>
          </UnopDropdown>
        </div>
      </div>
    </Container>
  );
};

export default DropDownWithHeader;
