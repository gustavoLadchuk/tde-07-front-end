import './App.css';
import Home from './pages/Home';
import User from './pages/User'
import About from './pages/About'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/user",
    element: <User />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
