import React from "react";

import AddBtn from "./AddBtn";
import Items from "./Items";

const App = () => {
  return (
    <div align="center">
      <h1 className="display-1" data-test="cyHeader">
        Super ToDo
      </h1>
      <div className="w-75 p-3 center">
        <AddBtn />
        <Items />
      </div>
    </div>
  );
};

export default App;
