import React from 'react';
import './App.scss';
import Header from "./layouts/Header"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CocktailIngredient from './pages/CocktailIngredient';
import CocktailView from "./pages/CocktailView"
import CocktailRandom from './pages/CocktailRandom';

function App() {
  return (
    <div id="main">
      <BrowserRouter>
        <Header />
        <div id='page-wrapper'>
          <Routes>
            <Route path='/' element={<WelcomePage />}></Route>
            <Route path='/cocktail-ingredient' element={<CocktailIngredient />}></Route>
            <Route path='/cocktail-random' element={<CocktailRandom />}></Route>
            <Route path="/cocktail/:id" element={<CocktailView />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

const WelcomePage = () => <div>Hello, let's browse some cocktails baby</div>


export default App;
