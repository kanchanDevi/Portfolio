import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './MyComponent/Main/Header'
import About from './MyComponent/Main/About'
import Error from './MyComponent/Main/Error'
import Project from './MyComponent/Main/Project';
import Skills from './MyComponent/Main/Skills'
import Home from './MyComponent/Main/Home'

const HeaderLayout = () => {
  return(
    <>
  <div className='flex flex-col justify-between min-h-[100vh] bg-[#2b3638] '>
        <Header />
        <Outlet />
        </div>
    </>
  );
};

const router = createBrowserRouter([
      {
        element: <HeaderLayout />,
        children: [
          {
            path: "/",
            element: <Home/>,
            errorElement: <Error />,
          },
          {
            path: "/about",
            element: <About/>,
            errorElement: <Error />,
          },
          {
            path: "/project",
            element: <Project />,
          },
         
          {
            path:'/skills',
            element:<Skills/>
          },
        
        ],
      },
    ]);
    
    const App = () => {
      return (
        <>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </>
      );
    };
    
    export default App;
     

