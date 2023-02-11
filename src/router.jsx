import { Navigate, createBrowserRouter } from 'react-router-dom';

import DefautLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';

import Load from './views/load/Load';
import Welcome from './views/welcome/Welcome';
import Dashboard from './views/dashboard/Dashboard';
import Login from './views/login/Login';
import NotFount from './views/pages/NotFound';
<<<<<<< HEAD

import Usuario from './views/usuario/Usuario';
import Roles from './views/roles/Usuario';
import Prueba1 from './views/Prueba1/Prueba1';
=======
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
import Configurar from './views/configurar/Configurar'
import Bancos from './views/bancos/Bancos'
import Empresa from './views/empresa/Empresa'
import Empleo from './views/empleo/Empleo'
import Mensajes from './views/mensajes/Mensajes'
import Cursos from './views/cursos/Cursos'
import Directorio from './views/directorio/Directorio'
import Presidentes from './views/presidentes/Presidentes'
>>>>>>> c8cfe936773dd5ff29a9321a4c766eb2db103d8b

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
<<<<<<< HEAD
                path: '/prueba1',
                element: <Prueba1 />
=======
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
                path: '/configurar',
                element: <Configurar/>
            },
            {
                path: '/bancos',
                element: <Bancos/>
            },
            {
                path: '/empresa',
                element: <Empresa/>
            },
            {
                path: '/mensajes',
                element: <Mensajes/>
            },
            {
                path: '/cursos',
                element: <Cursos/>
            },
            {
                path: '/directorio',
                element: <Directorio/>
            },
            {
                path: '/presidentes',
                element: <Presidentes/>
            },
            {
                path: '/empleo',
                element: <Empleo/>
            },
            {
                path: '/load',
                element: <Load/>
>>>>>>> c8cfe936773dd5ff29a9321a4c766eb2db103d8b
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