import React from "react";
import HomeSlider from "../components/HomeSlider";
import IconSlider from "../components/IconSlider";

const Home = () => {
  return (
    <>
      <main className="home-container">
        <img className="hero" src="./Images/backgroundimage.jpg"></img>
        <div className="main-text">
          <img src="https://logos-world.net/wp-content/uploads/2021/08/Grubhub-Symbol.png" />
          <h1>Order food right to your door!</h1>

          <button>Order Now</button>
        </div>
        <IconSlider />

        <div className="mid-page-container">
          <div className="mid-page-text">
            <h1>What are you Craving?</h1>
            <h2>
              Visit our featured restaurants page to find a delicious meal that
              fits your fancy.
            </h2>
            <button className="mid-button" href="/resturants">
              Go To Featured Resturants Page
            </button>
          </div>
          <div className="mid-page-image">
            <img
              src="./Images/diversefoodinlaptop.jpg"
              height="300"
              width="500"
            />
          </div>
        </div>

        <HomeSlider />
      </main>
    </>
  );
};

export default Home;
