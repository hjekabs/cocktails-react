import React from 'react';
import './App.scss';
import Header from "./layouts/Header"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CocktailName from "./pages/CocktailName"

function App() {
  return (
    <div id="main">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<WelcomePage />}></Route>
          <Route path='/cocktail-name' element={<CocktailName />}></Route>
        </Routes></BrowserRouter>
    </div>
  );
}

const WelcomePage = () => <div>Hello, let's browse some cocktails baby</div>


export default App;
