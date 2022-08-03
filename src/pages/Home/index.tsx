import React from "react";
import Header from "../../components/Header";
import Todolist from "../../components/Todolist";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Todolist />
    </>
  );
};

export default Home;
