import React from "react";
import CataguryHeader from "../../components/Catagury/CataguryHeader";
import DropDownWithHeader from "../../components/utilty/DropDownWithHeader";
import { Container, Row, Col } from "react-bootstrap";
import SideBarFilter from "../../components/utilty/SideBarFilter";
import ProductContainer from "../../components/products/ProductContainer";
import PagenationEl from "../../components/utilty/PagenationEl";
import SearchProductPageLogic from "../../logic/Products/SearchProductPageLogic";

const SearchProductPage = () => {
  const [items, onPress, numberOfProducts, pageCount] =
    SearchProductPageLogic();
  return (
    <div>
      <CataguryHeader />
      <DropDownWithHeader numberOfProducts={numberOfProducts} />
      <Container>
        <Row className="d-flex">
          <Col sm="3" xs="3" md="2" className="d-flex px-2">
            <SideBarFilter />
          </Col>
          <Col sm="9" xs="9" md="10" className="">
            <ProductContainer title="" btntitle="" items={items} />
          </Col>
        </Row>{" "}
        {<PagenationEl onPress={onPress} pageCount={pageCount} />}
      </Container>
    </div>
  );
};

export default SearchProductPage;
