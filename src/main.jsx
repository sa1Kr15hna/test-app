import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Yes from './yes.jsx'
// Change createBrowserRouter to createHashRouter
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  // Note: With HashRouter, you usually don't need the base path in the string
  {path: '/', element: <App />},
  {path: '/yes', element: <Yes />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)