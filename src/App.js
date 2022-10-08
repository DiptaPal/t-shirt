import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './components/Error/Error';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        }

      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }

  ]);
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>  
    </div>
  );
}

export default App;
