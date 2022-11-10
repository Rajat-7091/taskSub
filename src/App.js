import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './Component/Index';
import Login from './Component/Login';
import Contactus from './Component/Contactus';
import Register from './Component/Register';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Index/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/contact',
    element:<Contactus/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/about',
    element:<div>hello</div>
  }
])


function App() {
  return (
<RouterProvider router={router}/>
  );
}

export default App;
