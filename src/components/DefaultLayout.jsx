import { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client";

import Menu from './layout/menu';
import Header from './layout/header';

import { useSelector } from 'react-redux';
import useLoad from "./load";
import Load from "../views/load/Load";

export default function DefautLayout(props) {
    console.log("DefautLayout")

    const { load, user, auth } = useLoad();

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

    if (load) {
        return <Load />
    }

    if (!auth) {
        return <Navigate to="/login" />
    }

    return (
        <div className='app'>

            <Menu {...props} />

            <main>
                <Header {...props} />
                <div className="container-fluid mt-3">
                    <div className="bg-white p-3 border border-light-purple rounded position-relative">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}