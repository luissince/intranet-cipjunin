import { Navigate, Outlet } from "react-router-dom";

import useLoad from "./load";
import Load from "../views/load/Load";

export default function GuestLayout() {
    console.log("GuestLayout")

    const { load, user, auth } = useLoad();


    console.log(user, auth)

    if (load) {
        return <Load />
    }

    if (auth) {
        return <Navigate to="/welcome" />
    }

    return (
        <Outlet />
    );
}