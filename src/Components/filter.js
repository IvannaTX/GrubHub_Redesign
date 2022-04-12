import React, { Component } from "react";
import cuisineData from "../assests/restaurants.json";

class Filter extends Component {
  state = {
    restaurants: cuisineData,
    // restaurant Filter
  };
  filterTypeHandler = (e) => {
    let value = e.target.value;
    let filteredCuisine = null;
    if (value === "Pizza") {
      filteredCuisine = cuisineData.filter(
        (restaurant) => restaurant.cuisine === "Pizza"
      );
      this.setState({ restaurants: filteredCuisine });
    } else if (value === "American") {
      filteredCuisine = cuisineData.filter(
        (restaurant) => restaurant.cuisine === "American"
      );
      this.setState({ restaurants: filteredCuisine });
    } else if (value === "Mexican") {
      filteredCuisine = cuisineData.filter(
        (restaurant) => restaurant.cuisine === "Mexican"
      );
      this.setState({ restaurants: filteredCuisine });
    } else if (value === "Barbecue") {
      filteredCuisine = cuisineData.filter(
        (restaurant) => restaurant.cuisine === "Barbecue"
      );
      this.setState({ restaurants: filteredCuisine });
    } else if (value === "Italian") {
      filteredCuisine = cuisineData.filter(
        (restaurant) => restaurant.cuisine === "Italian"
      );
      this.setState({ restaurants: filteredCuisine });
    } else if (value === "Chinese") {
      filteredCuisine = cuisineData.filter(
        (restaurant) => restaurant.cuisine === "Chinese"
      );
      this.setState({ restaurants: filteredCuisine });
    } else if (value === "Mediterranean") {
      filteredCuisine = cuisineData.filter(
        (restaurant) => restaurant.cuisine === "Mediterranean"
      );
      this.setState({ restaurants: filteredCuisine });
    } else if (value === "Seafood") {
      filteredCuisine = cuisineData.filter(
        (restaurant) => restaurant.cuisine === "Seafood"
      );
      this.setState({ restaurant: filteredCuisine });
    } else {
      this.setState({ restaurant: cuisineData });
    }
  };

  render() {
    return (
      <div className="filters">
        <p>
          <b>Filter By:</b>
        </p>
        <div className="type-filter">
          <select id="cuisine-type" onChange={this.filterTypeHandler}>
            <option value="Cuisine">Cuisine</option>
            <option value="Pizza">Pizza</option>
            <option value="American">American</option>
            <option value="Mexican">Mexican</option>
            <option value="Barbecue">Barbecue</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Seafood">Seafood</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
