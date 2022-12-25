import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import GuestLayout from './components/GuestLayout'
import DashBoard from './views/DashBoard'
import Login from './views/Logins'
import NotFound from './views/NotFound'
import Signup from './views/Signup'
import Users from './views/Users'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard />
            },
            {
                path: '/users',
                element: <Users />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])
export default router
