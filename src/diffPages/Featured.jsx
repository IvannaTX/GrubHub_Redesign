import React from "react";
import data from "../assests/restaurant.json";

export const Featured = () => {
  return (
    <>
      <div className="RestaurantFilter">
        <form className="filter">
          <label> Filter By: </label>{" "}
          <select name="list" id="list">
            <optgroup label="Categories">
              <option value="Pizza"> Pizza </option>{" "}
              <option value="American">American </option>{" "}
              <option value="Mexican">Mexican</option>{" "}
              <option value="Barbecue">Barbecue</option>{" "}
              <option value="Italian">Italian </option>{" "}
              <option value="Chinese">Chinese</option>{" "}
              <option value="Mediterranean">Mediterranean</option>{" "}
              <option value="Seafood">Seafood</option>{" "}
            </optgroup>{" "}
          </select>{" "}
        </form>{" "}
      </div>
      {data.map((post, index) => {
        return (
          <>
            <div className="rest-container">
              <div class="card">
                <div className="card-header">{post.cuisine}</div>
                <div className="card-body">
                  <h5 className="card-title">{post.restaurantName}</h5>
                  <p className="card-text">{post.address}</p>
                  <button type="button" className="btn">
                    Order Now!
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Featured;
