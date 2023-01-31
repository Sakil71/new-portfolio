import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import Contact from './Page/Contact/Contact';
import Home from './Page/Home/Home';
import Doctors from './Page/Projects/Doctors/Doctors';
import Emazon from './Page/Projects/Emazon/Emazon';
import Gymnasium from './Page/Projects/Gymnasium/Gymnasium';
import Projects from './Page/Projects/Projects';
import Skills from './Page/Skills/Skills';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'skills',
        element: <Skills></Skills>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'projects',
        element: <Projects></Projects>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path:'projects/gym',
        element: <Gymnasium></Gymnasium>
      },
      {
        path:'projects/ema',
        element: <Emazon></Emazon>
      },
      {
        path:'projects/doc',
        element: <Doctors></Doctors>
      },
      {
        path:'gym',
        element: <Gymnasium></Gymnasium>
      },
      {
        path:'ema',
        element: <Emazon></Emazon>
      },
      {
        path:'doc',
        element: <Doctors></Doctors>
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
