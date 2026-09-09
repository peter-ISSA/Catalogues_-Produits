import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  }
])

ReactDom.createRoot(document.getElementById("Gabriel-BS")).render(
  <>
  <RouterProvider router={route}/>
  </>
)
