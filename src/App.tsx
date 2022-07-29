import React from 'react';
import './App.scss';
import Header from "./layouts/Header"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CocktailName from "./pages/CocktailName"
import CocktailIngredient from './pages/CocktailIngredient';

function App() {
  return (
    <div id="main">

      <BrowserRouter>
        <Header />

        <div id='page-wrapper'>
          <Routes>
            <Route path='/' element={<WelcomePage />}></Route>
            <Route path='/cocktail-ingredient' element={<CocktailIngredient />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

const WelcomePage = () => <div>Hello, let's browse some cocktails baby</div>


export default App;
