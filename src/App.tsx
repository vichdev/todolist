import React from "react";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Context } from "./context/TaskContext";

const App: React.FC = () => {
  return (
    <>
      <Context>
        <GlobalStyles />
        <Home />
      </Context>
    </>
  );
};

export default App;
