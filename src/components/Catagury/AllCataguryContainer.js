import React from "react";
import CartaguryCard from "./CartaguryCard";
import PagenationEl from "../utilty/PagenationEl";
import LoadingAnimation from "../utilty/LoadingAnimation";
import { Container } from "react-bootstrap";
import AllCatgoryPageLogic from "../../logic/catagory/AllCatgoryPageLogic";

const AllCataguryContainer = () => {
  //  Desrtruction the data from logic file

  const [loading, pageCount, onPress, catagory, colors] = AllCatgoryPageLogic();

  // start JSX Code

  return (
    <Container>
      <h3 className="m-3">All Cartagory :</h3>
      <div className="card-container ">
        {loading === false ? (
          catagory ? (
            catagory.map((item, index) => {
              return (
                <CartaguryCard
                  key={index}
                  title={item.name}
                  backgroundColor={colors[Math.floor(Math.random() * 5) + 1]}
                  img={item.image}
                />
              );
            })
          ) : (
            <h3>Not Fund</h3>
          )
        ) : (
          <LoadingAnimation />
        )}
      </div>
      {pageCount > 1 ? (
        <PagenationEl pageCount={pageCount} onPress={onPress} />
      ) : null}
    </Container>
  );
};

export default AllCataguryContainer;
