import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Liste_produit from './Composant/Liste_produit';
import Detail_produit from './Composant/Detail_produit';
import { Toaster } from 'react-hot-toast';

const route = createBrowserRouter([
  {
    path:"/",
    element:<Liste_produit/>,
  },
  {
    path:"detail",
    element:<Detail_produit/>
  },
  {
    path:"detail/:id",
    element:<Detail_produit/>
  }
])

ReactDom.createRoot(document.getElementById("Gabriel-BS")).render(
  <>
  <Toaster/>
  <RouterProvider router={route}/>
  </>
)
