import React from 'react';
import ReactDOM from 'react-dom';
import "core-js";
import App from './app';


function Try() {       //test.jsx
  //return 
  return <button>Try</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Try />)

require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-unicode-sets-regex"],
});

require("@babel/core").transformSync("code", {
  presets: ["@babel/preset-react"],
});

require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-typescript"],
});

require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-flow-strip-types"],
});
/*var Complete = function Complete() {
  return React.createElement(
    "h1",
    null,
    "\uD83C\uDFC1 You completed the exercise! \uD83C\uDF89"
  )
}

ReactDOM.render(
  React.createElement(Complete, null),
  document.getElementById("root")
)*/




/*const root = ReactDOM.createRoot(document.getElementById('mydiv'));

root.render(
    <App>
  <button onClick={() => {
    window.alert(`
      Here I am with a brain the size of a planet,
      and they tell me to add a contact.
    `)
  }}>
    Add a contact
  </button>,
  </App>
)*/




 /*import React, { useState } from 'react';
 import ReactDOM from 'react-dom'       //use 'react-dom/client' if necessary
 
 function FavoriteColor() {
    const [color, setColor] = useState("black");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <button type="button" onClick={() => setColor("yellow")}>Yellow</button>
            <button type="button" onClick={() => setColor("green")}>Green</button>
        </>
    );
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<FavoriteColor />);*/

 /*ReactDOM.render(
    <FavoriteColor />,
    document.getElementById('root')
 )*/



 
 /*<p id="demo1"></p>
 <p id="demo2"></p>
 
 <script>
 
 function myFunction() {
   let carName = "Mustang";
   let text = typeof carName + " " + carName; 
   document.getElementById("demo2").innerHTML = text;
 }
 
 myFunction();
 
 function practice() {
   document.getElementById("demo1").innerHTML = 'What it do, cuz?'
 }
 
 practice();
 
 
     </script>*/