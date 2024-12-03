import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// const myHelloworld: React.ReactElement=React.createElement(
//   "p",
//   { key : 1,className:"firstDiv"},
//   "This is a Paragraph"
// );

// const myButton: React.ReactElement=React.createElement(
//   "button",
//   { key : 2,className:"myButton"},
//   "Click on it"
// );
// const myList: React.ReactElement = React.createElement( "ul", {key :3}, [
//   React.createElement("li", {key :4}, "first"),
//   React.createElement("li", {key :5}, "second"),
//   React.createElement("li", {key :6}, "third")
//  ]);

// const myDiv: React.ReactElement=React.createElement(
//   "div",
//   {key :7},
//   [myHelloworld,myButton,myList]
// );



ReactDOM.createRoot(document.getElementById('root')!).render(
  // myDiv
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
