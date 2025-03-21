import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; // Import the router configuration
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      {/* Replace the default content with the RouterProvider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


