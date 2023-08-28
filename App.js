import React from "react";
import ReactDOM from "react-dom/client";
import React from "react";

const Title = () => <h1 id="title">Swiggy Clone App Title</h1>;



const Heading1 = () => {
  return (
    <>
      <Title />
      <h1 id="heading">Swiggy Clone App</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading1 />);
