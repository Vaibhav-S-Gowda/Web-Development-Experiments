import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './appcomposing';
import App from './App-props';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// const x = 15;

// const myElement = <h1>{(x) < 10 ? "Hello bruh" : "Good Night"}</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
