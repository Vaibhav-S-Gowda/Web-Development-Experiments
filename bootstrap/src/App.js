import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import MyButton from './components/Button';
import ButtonOutline from './components/ButtonOutline';
import NavigationBar from "./components/Navigation";
import MyCard from "./components/Card";
import MyForm from "./components/Form";
import MyAlert from "./components/Alert";
import MyModal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
        <MyButton/>
        <hr/>
  {/*Remove only a single component comment at a time*/}
    <ButtonOutline />
        <hr/>
        <NavigationBar />
        <hr/>
        <MyCard/>
        <hr/>
        <MyForm/>
        <hr/>
        <MyAlert/>
        <hr/>
        <MyModal/>
      </div>
  );
}

export default App;
