import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { useCitiesList } from './hooks/useCitiesList.js';

import { Home } from './Home/Home';
import { SingleCity } from './components/SingleCity';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:city' element={<SingleCity />} />
      </Routes>
    </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
