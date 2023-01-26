import { Navigate, createBrowserRouter } from 'react-router-dom';

import DefautLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';

import Load from './views/load/Load';
import Welcome from './views/welcome/Welcome';
import Dashboard from './views/dashboard/Dashboard';
import Login from './views/login/Login';
import NotFount from './views/pages/NotFound';
import Usuarios from './views/usuarios/Usuarios'
import Roles from './views/roles/Roles'
import Ingresos from './views/ingresos/Ingresos';
import Capitulos from './views/capitulos/Capitulos'
import Universidades from './views/universidades/Universidades'
import Conceptos from './views/conceptos/Conceptos'
import Ingenieros from './views/ingenieros/Ingenieros'
import Cobros from './views/cobros/Cobros'
import Reportes from './views/reportes/Reportes'
import Entidades from './views/entidades/Entidades'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefautLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/welcome" />
            }
            ,
            {
                path: '/dashboard',
                element: <Dashboard />
            },,
            {
                path: '/welcome',
                element: <Welcome />
            },
            {
                path: '/roles',
                element: <Roles />
            },
            {
                path: '/usuarios',
                element: <Usuarios/>
            },
            {
                path: '/capitulos',
                element: <Capitulos />
            },
            {
                path: '/cobros',
                element: <Cobros/>
            },
            {
                path: '/conceptos',
                element: <Conceptos />
            },
            {
                path: '/entidades',
                element: <Entidades />
            },
            {
                path: '/ingenieros',
                element: <Ingenieros />
            },
            {
                path: '/ingresos',
                element: <Ingresos />
            },

            {
                path: '/reportes',
                element: <Reportes />
            },
            {
                path: '/universidades',
                element: <Universidades/>
            },
            {
                path: '/load',
                element: <Load/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
                
            }
        ]
    },
    {
        path: '*',
        element: <NotFount />
    },
]);

export default router;