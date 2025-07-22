import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { Error } from './pages/Error/Error'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Logout from './pages/Logout/Logout'
import { EmailVerificationCode } from './pages/Verification_Code/Email_Verification_Code'
import Registration_Email from './pages/Register/Registration_Email'
import RegisterLayout from './pages/Register/RegisterLayout'


export default function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children:[
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '/login',
            element: <Login />
          },
          {
            path: '/logout',
            element: <Logout />
          },
          {
            path: '/registration',
            element: <RegisterLayout />,
            children: [
              {
                path: '',
                element: <Registration_Email />
              },
              {
                path: 'verification-code',
                element: <EmailVerificationCode />
              },
              {
                path: 'user-data',
                element: <Register />
              }
            ]
          },
        ]
      }
    ]
  );

  return (
    <RouterProvider router={router}/>
  )
}