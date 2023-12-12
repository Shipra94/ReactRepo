import React from "react";
import ReactDOM from "react-dom/client";

//  <div id="parent">
//     <div id="child 1">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
//     <div id="child 2">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
// </div> 

const parent = React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id:"child1"}, [ React.createElement("h1",{}, "I am H1 tag"),React.createElement("h2",{}, "I am H2 tag")]),
React.createElement("div", {id:"child2"}, [ React.createElement("h1",{}, "I am H1 tag"),React.createElement("h2",{}, "I am H2 tag")])])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);