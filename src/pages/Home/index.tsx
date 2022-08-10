import React from "react";
import Header from "../../components/Header";
import Summary from "../../components/Summary";
import Toast from "../../components/Toast";
import Todolist from "../../components/Todolist";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Summary />
      <Todolist />
      <Toast />
    </>
  );
};

export default Home;
