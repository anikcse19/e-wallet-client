import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/route.jsx';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors visibleToasts={2} position="bottom-right" />
  </StrictMode>
);
