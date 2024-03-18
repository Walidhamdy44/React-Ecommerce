import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingAnimation = () => {
  return (
    <div className="loading d-flex flex-column gap-4 justify-content-center align-items-center">
      <div className="font-bold">Loading ...</div>
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default LoadingAnimation;
