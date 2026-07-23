import { createRoot } from 'react-dom/client'
import {RouterProvider ,createBrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from './Component/Home.jsx'
import BrowseBooks from './Component/BrowseBooks.jsx'
import Error from './Component/Error.jsx'
import AddBooks from './Component/AddBooks.jsx'
import BookDetails from './Component/BookDetails.jsx'
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />,
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails />, 
      },
      {
        path: "/booksbrowser/:ctgid",
        element: <BrowseBooks />
      },
      {
        path:"/addbook",
        element:<AddBooks />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={approuter}></RouterProvider>
)
