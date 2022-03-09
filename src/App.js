import React from "react";
import "./App.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Card from "./Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
      key={item.id}
      item={item}
      />
    );
  });

  return (
    <div className="app">
      <Nav />
      <Banner />
      <section className="cards_list">
      {cards}
      </section>
    </div>
  );
}

export default App;
