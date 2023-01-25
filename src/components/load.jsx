import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { restore, starting } from '../store/authSlice';

const useLoad = () => {

    const [load, setLoad] = useState(true);
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {

        const load = async () => {
            try {
                setLoad(true);

                //await new Promise((resolve, reject) => setTimeout(resolve, 3000));

                const login = window.localStorage.getItem("login");
                if (login == null) {
                    dispatch(starting());
                    setUser(null);
                    setAuth(false);
                    setLoad(false);
                } else {
                    // await validToken(JSON.parse(login).token); 
                    const user = JSON.parse(login);
                    const authentication = true;

                    dispatch(restore({ user: user, authentication: authentication }));
                    setUser(user);
                    setAuth(authentication);
                    setLoad(false);
                }
            } catch (error) {
                dispatch(starting());
                setUser(null);
                setAuth(false);
                setLoad(false);
            }
        }

        load();
    }, []);


    return { load, user, auth };
}


export default useLoad;