import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { logout } from '../../store/authSlice';
import { clear } from '../../store/notifeSlice';
import { images } from '../../constants';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hideSidebar = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth <= 768) {
            document.getElementById("sidebar").classList.add("toggled");

            let overlay = document.createElement("div");
            overlay.setAttribute("id", "overlay-sidebar")
            overlay.setAttribute("role", "button");
            overlay.setAttribute("tabindex", "0");
            overlay.setAttribute("aria-label", "overlay");
            overlay.classList.add("overlay");
            document.getElementById("sidebar").appendChild(overlay);
        } else {
            document.getElementById("sidebar").classList.toggle("active");
        }
    }

    const onEventCloseSession = () => {
        dispatch(logout())
        dispatch(clear());
        navigate("/login", { replace: true })
    }

    return (
        <header className="app-header">
            <span className="app-sidebar__toggle" onClick={hideSidebar}>
            </span>

            <ul className="app-nav">
                <div className="dropdown">
                    <a className="app-nav__item"
                        href=""
                        data-bs-toggle="dropdown"
                        aria-label="Abrir Notificaciones"
                        aria-expanded="false">
                        <i className="fa fa-bell-o fa-sm  fa-sm"></i>
                        {/* <span className="pl-1 pr-1 badge-warning rounded h7 icon-absolute ">{22}</span> */}
                        <span className="pl-1 pr-1 badge-warning rounded h7 icon-absolute ">0</span>
                    </a>
                    <ul className="app-notification dropdown-menu dropdown-menu-right">
                        <div className="app-notification__content">
                            {/* {
                                this.props.notificaciones.length != 0 ?
                                    this.props.notificaciones.map((item, index) => (
                                        <li key={index}>
                                            <a className="app-notification__item">
                                                <span className="app-notification__icon">
                                                    <span className="fa-stack fa-lg">
                                                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                                        <i className="fa fa-warning fa-stack-1x fa-inverse"></i>
                                                    </span>
                                                </span>
                                                <div>
                                                    <p className="app-notification__message">{item.cantidad} {item.nombre}</p>
                                                    <p className="app-notification__meta">{item.estado}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))

                                    : null
                            } */}
                        </div>

                        <li className="app-notification__footer">No hay notificaciones para mostrar.</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <a className="app-nav__item"
                        href=""
                        data-bs-toggle="dropdown"
                        aria-label="Abrir Perfil"
                        aria-expanded="false">
                        <img src={images.usuario} className="user-image" alt="Usuario" />
                    </a>
                    <ul className="dropdown-menu settings-menu dropdown-menu-right">
                        <li className="user-header">
                            <img src={images.usuario} className="img-circle" alt="Usuario" />
                            <p>
                                <span>sdfsdf</span>
                                <small> <i>rol</i> </small>
                            </p>
                        </li>
                        <li className="user-footer">
                            <button className="btn btn-secondary" onClick={() => { }}>
                                <i className="fa fa-sign-out fa-sm" ></i> Cerrar Módulo
                            </button>

                            <button className="btn btn-secondary" onClick={() => onEventCloseSession()}>
                                <i className="fa fa-window-close fa-sm"></i> Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            </ul>
        </header>
    );
}

export default Header;