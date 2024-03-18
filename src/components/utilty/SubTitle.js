import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubTitle = ({ btntitle, title, pathlink }) => {
  return (
    <div className="d-flex alighn-items-center justify-content-between title-cat">
      <span>{title}</span>
      {btntitle ? (
        <Link to={`${pathlink}`}>
          <Button className="btn-cat">{btntitle}</Button>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
