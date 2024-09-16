import React from 'react'; // Import React
import ReactDOM from 'react-dom/client';
 // Import ReactDOM
import './App/layout/style.css'; // Your custom styles
import '@fontsource/roboto/300.css'; // Font imports
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom'; // RouterProvider import
import { router } from './App/Router/Routes'; // Ensure the path is correct

// Create root and render the application
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
