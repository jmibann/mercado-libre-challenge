import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './router';

import './styles/main.scss';

import { Header } from './components';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
