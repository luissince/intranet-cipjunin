import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../store/authSlice';
import { images } from '../../constants/';
import './Login.css';

// import { NotificationContainer, NotificationManager } from 'react-notifications';


const Login = (props) => {

    const [codigo, setCodigo] = useState('');
    const [clave, setClave] = useState('');
    const [message, setMessage] = useState('');
    const [process, setProcess] = useState(false);

    const refCodigo = useRef(null);
    const refClave = useRef(null);

    const dispatch = useDispatch();
    const authentication = useSelector((state) => state.authentication.authentication)

    const onEventLogin = async () => {
        if (codigo == "") {
            // NotificationManager.warning("Ingrese su codigo.", "Login");
            refCodigo.current.focus();
            setMessage("Ingrese su código");
            return;
        }

        if (clave == "") {
            // NotificationManager.warning("Ingrese su Contraseña.", "Login");
            refClave.current.focus();
            setMessage("Ingrese su contraseña");
            return;
        }

        setProcess(true);

        try {
            const request = {
                "codigo": codigo,
                "clave": clave
            }

            dispatch(login({ user: request }));
        } catch (error) {
            setProcess(false);
            if (error.response) {
                setMessage(error.response.data);
            } else {
                setMessage("Se produjo un error de conexión, intente nuevamente.");
            }
        }
    }


    if (authentication) {
        return <Navigate to="/" />
    }

    return (
        <div className="form-content text-center bg-white">
            <form className="form-signin">
                <img className="mb-4" src={images.INMOBILIARIA} alt="Logo" width="150" />
                <h4 className="mb-3 font-weight-normal">Ingrese los datos</h4>
                {
                    message !== "" ?
                        <div className="alert alert-warning d-flex align-items-center" role="alert">
                            <i className="bi bi-exclamation-diamond-fill m-1"></i>
                            <div className=" m-1">
                                {message}
                            </div>
                        </div> : null
                }

                {
                    process ?
                        <div className="m-3">
                            <div className="spinner-border text-success" role="status">
                            </div>
                        </div>
                        : null
                }

                <label htmlFor="inputUsuario" className="sr-only">Usuario</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Dijite su código"
                    ref={refCodigo}
                    value={codigo}
                    onChange={(event) => setCodigo(event.target.value)}

                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            onEventLogin();
                            event.preventDefault();
                        }
                    }}
                    autoFocus />

                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Dijite la contraseña"
                    ref={refClave}
                    value={clave}
                    onChange={(event) => setClave(event.target.value)}

                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            onEventLogin();
                            event.preventDefault();
                        }
                    }} />

                {/* <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Recuerdame
                    </label>
                </div> */}
                <button type="button" onClick={() => onEventLogin()} className="btn btn-lg btn-primary btn-block">Ingresar</button>
                {/* <button onClick={this.onEventRecuperar} type="button" className="btn btn-lg btn-outline-primary btn-block">Recuperar</button> */}
                <p className="mt-5 mb-3 text-muted">SysSoft Integra © {new Date().getFullYear()}</p>
            </form>
        </div>
    );
}

export default Login;