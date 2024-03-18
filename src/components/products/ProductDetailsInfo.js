import React from "react";
import { Button } from "react-bootstrap";
import ProductDetailsLogic from "../../logic/Products/ProductDetailsLogic";
import { useParams } from "react-router-dom";
const ProductDetailsInfo = () => {
  const { id } = useParams();
  const [item, images, cat] = ProductDetailsLogic(id);
  return (
    <div className="info">
      <div>
        <h5>{cat.name}</h5>
        <p>{item.title}</p>
      </div>
      <div>
        <h5>
          Brand :<span>Apple</span>
        </h5>
        <span className="my-2 d-block color">Colors:</span>
        <div className="circles">
          {item.availableColors ? (
            item.availableColors.map((color) => {
              return (
                <span
                  className="circle"
                  onClick={(e) => {
                    e.target.classList.add("active");
                  }}
                  style={{ backgroundColor: `${color}` }}
                ></span>
              );
            })
          ) : (
            <h2>No Avalible Colors</h2>
          )}
        </div>
      </div>
      <div>
        <h5>Description</h5>
        <p>{item.description}</p>
      </div>
      <div className="price">
        <Button>Add To Cart</Button>
        <span>{item.price} $</span>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
