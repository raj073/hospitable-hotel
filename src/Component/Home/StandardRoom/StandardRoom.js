import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const StandardRoom = ({ standardRooms }) => {
  const { _id, type, title, description, rating, price, image } = standardRooms;
  return (
    <div className="row px-2 py-4 bg-white border rounded mt-4">
      <div className="col-md-3 mt-1">
        <img
          className="img-fluid img-responsive rounded product-image h-100"
          src={image}
          alt="Hotel Room"
        />
      </div>
      <div className="col-md-6 mt-1">
        <h5>{title}</h5>
        <div className="d-flex flex-row">
          <div className="ratings mr-2">
            <BsFillStarFill className="text-warning"></BsFillStarFill> &nbsp;
            <BsFillStarFill className="text-warning"></BsFillStarFill> &nbsp;
            <BsFillStarFill className="text-warning"></BsFillStarFill> &nbsp;
          </div>
          <span className="mt-1">{rating}</span>
        </div>
        <p className="text-justify para mb-0">
          {description}
          <br></br>
        </p>
      </div>
      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
        <div className="d-flex flex-row align-items-center">
          <h4 className="mr-1 text-warning">$ {price}</h4>
        </div>
        <h6 className="text-success">{type}</h6>
        <div className="d-flex flex-column mt-4">
          <button className="btn btn-primary btn-sm" type="button">
            <Link
              className="text-white text-decoration-none"
              to={`/room/${_id}`}
            >
              Show Details
            </Link>
          </button>
          <button className="btn btn-outline-primary btn-sm mt-2" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StandardRoom;
