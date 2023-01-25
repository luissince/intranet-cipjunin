import { useEffect } from "react";
import { useSelector } from 'react-redux';
import {
    Routes as Switch,
    Route,
    Navigate,
    useLocation,
    Link
} from "react-router-dom";
import Menu from "../../components/layout/menu";
import Header from "../../components/layout/header";
import Welcome from "../welcome/Welcome";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "../pages/NotFound";

export default function Inicio(props) {
    console.log("Inicio")

    const authentication = useSelector((state) => state.authentication.authentication)

    let location = useLocation();
    console.log(location)

    useEffect(() => {
        function onEventClick(event) {
            let sidebar = document.getElementById("sidebar");
            let overlaySidebar = document.getElementById("overlay-sidebar");
            if (!(event.target !== overlaySidebar && !isChild(event.target, overlaySidebar))) {
                sidebar.classList.remove("toggled");
                sidebar.removeChild(overlaySidebar)
            }
        }

        window.addEventListener('click', onEventClick);

        return () => {
            window.removeEventListener('click', onEventClick);
        }
    }, []);

    useEffect(() => {
        function onEventResize(event) {
            if (event.target.innerWidth <= 768 && document.getElementById("sidebar").classList.contains("active")) {
                document.getElementById("sidebar").classList.remove("active");
            }
        }

        window.addEventListener('resize', onEventResize);

        return () => {
            window.removeEventListener('resize', onEventResize);
        }
    }, []);

    useEffect(() => {
        function onEventFocused(event) {
            // let userToken = window.localStorage.getItem('login');
            // if (userToken === null) {
            //     this.props.restore();
            //     this.props.history.push("login");
            // } else {
            //     let tokenCurrent = JSON.parse(userToken);
            //     let tokenOld = this.props.token.userToken;
            //     if (tokenCurrent.token !== tokenOld.token) {
            //         window.location.href = "/";
            //         return;
            //     }

            //     let projectToken = window.localStorage.getItem('project');

            //     let projectCurrent = JSON.parse(projectToken)
            //     let projectOld = this.props.token.project;

            //     if (JSON.stringify(projectCurrent) !== JSON.stringify(projectOld)) {
            //         window.location.href = "/";
            //         return;
            //     }

            //     if (projectToken === null) {
            //         this.props.restoreProject();
            //     }
            // }
        }

        window.addEventListener('focus', onEventFocused);

        return () => {
            window.removeEventListener('focus', onEventFocused);
        }
    }, []);

    const isChild = (child, parent) => {
        while ((child = child.parentNode) && child !== parent);
        return !!child;
    }

    if (!authentication) {
        return <Navigate to="/login" />
    }

    return (
        // <>
            <h1>inicio</h1>
        //     <Link to={"/inicio/dashboard"}>ir</Link>
        //     <Switch>
        //         <Route
        //             path="/dashboard"
        //             element={<Dashboard />}
        //         />
        //     </Switch>
        // </>

        // <div className='app'>

        //     <Menu {...props} />

        //     <main>
        //         <Header {...props} />

        //         <div className="container-fluid mt-3">
        //             <div className="bg-white p-3 border border-light-purple rounded position-relative">
        //                 <Switch>
        //                     <Route
        //                         path={"/inicio"}
        //                         exact={true}
        //                         element={<Navigate to={"/welcome"} />}
        //                     />

        //                     <Route
        //                         path="/welcome"
        //                         element={<Welcome />}
        //                     />

        //                     <Route
        //                         path="/dashboard"
        //                         element={<Dashboard />}
        //                     />

        //                     <Route
        //                         path='*'
        //                         element={<NotFound />}
        //                     />
        //                 </Switch>
        //             </div>
        //         </div>
        //     </main>
        // </div>
    );
}