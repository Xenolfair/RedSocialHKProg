import React from "react";
import "./App.css";
import Card from "./components/card/card";
import useFetch from "./hooks/useFetch";
import Nav from "./components/nav/navPage";
import Header from "./components/header/header";
import Status from "./components/status/status";
import Footer from "./components/footer/footer";

const App = () => {
  const { data: characters, loading } = useFetch("https://rickandmortyapi.com/api/character");

  if (loading) return <p>Loading...</p>;

  return (
    <div className="app">
      <Header />
      <Nav />
      <Status />
      <div className="card-container">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
