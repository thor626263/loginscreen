import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="container">
      <section className="ls">
      <LeftSide/>
      </section>
      <section className="rs">
      <RightSide/>
      </section>
    
    </div>
  );
}

export default App;
