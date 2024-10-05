import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Sobre from './Pages/Sobre';
import Habilidades from './Pages/Habilidades';
import App from './App.jsx';
import Home from './Pages/Home';
import Projects from './Pages/Projects.jsx'
import ProjectsDetails from './Pages/ProjectDetails.jsx'
import Contato from './Pages/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: 'habilidades', element: <Habilidades /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'projects', element: <Projects/>},
      { path: 'projects/:id', element: <ProjectsDetails/> }, 
      { path: 'contato', element:<Contato/> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
