import React from "react";
import ReactDOM from "react-dom/client";
const JsxHeading = () => <h1 className="head">JSX heading for react 😍</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

// React Functional Component with return

const Heading = () => {
  return <h1>React Functional Component</h1>;
};

// React Functional component without return


const Heading2 = () => ( 
  <div id="container">
    <JsxHeading/>
    <h1>React Functional Component</h1>
  </div>
);

root.render(<Heading2/>);
