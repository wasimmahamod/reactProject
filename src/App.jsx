import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Awards from "./components/Awards";
import Delivery from "./components/Delivery";
import Testimonil from "./components/Testimonil";
import Callback from "./components/Callback";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <Awards/>
      <Delivery/>
      <Testimonil/>
      <Callback/>
    </>
  );
};

export default App;
