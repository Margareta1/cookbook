import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NavigationBar from './components/NavigationBar';
import AddRecipe from './pages/AddRecipe';
import Recipes from './pages/Recipes';
import './styles/app.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecipeItem } from './types/RecipeItem';
import RecipeContext from './store/recipes-context';


function App() {
  
  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient}>
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new' element={<AddRecipe />} />
        <Route path='/recipes' element={<Recipes />} />
      </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
