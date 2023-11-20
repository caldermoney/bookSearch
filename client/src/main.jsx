import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';

// Create a root.
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

// Render the app on the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import SearchBooks from './pages/SearchBooks'
// import SavedBooks from './pages/SavedBooks'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1 className='display-2'>Wrong page!</h1>,
//     children: [
//       {
//         index: true,
//         element: <SearchBooks />
//       }, {
//         path: '/saved',
//         element: <SavedBooks />
//       }
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )
