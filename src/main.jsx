import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Yes from './yes.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/test-app/', element: <App />},
  {path: '/test-app/yes', element: <Yes />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
