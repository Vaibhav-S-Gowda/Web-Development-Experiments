import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import App from './App';
// import App from './Components/App_State';
// import App from './App_Country';
// import App from './App_Event';
// import App from './App-stateless';
import App from './App_Child_to_Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
