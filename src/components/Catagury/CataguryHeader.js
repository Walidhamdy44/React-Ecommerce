import React from "react";
import { Container } from "react-bootstrap";
import SideBarFilterLogic from "../../logic/Search/SideBarFilterLogic";

const CataguryHeader = () => {
  const [catagory, brand] = SideBarFilterLogic();
  return (
    <div className="cat-header">
      <Container>
        <ul>
          <li className="active">All</li>
          {catagory
            ? catagory.slice(0, 6).map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })
            : null}
        </ul>
      </Container>
    </div>
  );
};

export default CataguryHeader;
