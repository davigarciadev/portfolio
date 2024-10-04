import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Sobre from './Pages/Sobre';
import Habilidades from './Pages/Habilidades';
import App from './App.jsx';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: 'habilidades', element: <Habilidades /> },
      { path: 'sobre', element: <Sobre /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
