import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { images } from '../../constants';

const Menu = () => {

    useEffect(() => {
        onEventSideBar();
    }, []);

    const onEventSideBar = () => {
        let value = document.querySelectorAll('#sidebar ul li .pro-inner-item[data-bs-toggle="collapse"]');
        value.forEach(element => {
            element.parentNode.querySelector('ul').addEventListener('shown.bs.collapse', function (event) {
                value.forEach(item => {
                    if (event.target.getAttribute('id') !== item.parentNode.querySelector('ul').getAttribute('id')) {
                        item.setAttribute("aria-expanded", "false");
                        item.parentNode.querySelector('ul').classList.remove("show");
                    }
                });
            });
        });
    }

    return <>
        <nav id="sidebar">
            <div className='pro-sidebar-inner'>
                <div className='pro-sidebar-layout'>
                    <div className="sidebar-header">
                        <img className="d-block mx-auto m-1" src={images.INMOBILIARIA} alt="Logo" width="150" />
                        <h5 className="m-0">INMOBILIARIA GMYC</h5>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Proyecto</p>
                        <div className="line"></div>

                        <li>
                            <NavLink to={`/welcome`}
                                className="pro-inner-item "
                                role="button"
                                id="menu1">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i className="bi bi-9-square-fill"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Welcome
                                </span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to={`/usuarios`}
                                className="pro-inner-item"
                                role="button"
                                id="menu2">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i className="bi bi-9-square-fill"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Usuarios
                                </span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to={`/roles`}
                                className="pro-inner-item"
                                role="button"
                                id="menu2">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i class="fa fa-table"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Roles
                                </span>
                            </NavLink>
                        </li>

                        {/* <li>
                            <NavLink to={`/ingresos`}
                                className="pro-inner-item"
                                role="button"
                                id="menu2">
                            </NavLink>
                        </li> */}
                        <li >
                            <a href={"#mn7"}
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                className="pro-inner-item"
                                role="button">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        <i class="bi bi-diagram-3-fill"></i>
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Ingresos
                                </span>
                                <span className="pro-arrow-wrapper">
                                    <span className="pro-arrow"></span>
                                </span>
                            </a>

                            <ul className="collapse list-unstyled transition-03" id={"mn7"}>
                                <li>
                                    <NavLink to={`/ingresos`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Ingresos
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to={`/certificado-habilidad`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Certificado de Habilidad
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/certificado-obra`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Certificado de Obra
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to={`/certificado-proyecto`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Certificado de Proyecto
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={`/capitulos`}
                                className="pro-inner-item"
                                role="button"
                                id="capitulos">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i class="fa fa-clone"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Capitulos
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/universidades`}
                                className="pro-inner-item"
                                role="button"
                                id="universidades">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i class="fa fa-bank"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">

                                    Universidades
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/conceptos`}
                                className="pro-inner-item"
                                role="button"
                                id="conceptos">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i class="fa fa fa-list-alt"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Conceptos
                                </span>
                            </NavLink>
                        </li>
                        <li >
                            <a href={"#mn8"}
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                className="pro-inner-item"
                                role="button">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        <i class="bi bi-person-fill"></i>
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Ingenieros
                                </span>
                                <span className="pro-arrow-wrapper">
                                    <span className="pro-arrow"></span>
                                </span>
                            </a>

                            <ul className="collapse list-unstyled transition-03" id={"mn8"}>
                                <li>
                                    <NavLink to={`/ingenieros`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Lista
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to={`/habilidad-ingeniero`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Habilidad
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={`/cobros`}
                                className="pro-inner-item"
                                role="button"
                                id="menu2">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i className="bi bi-9-square-fill"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Cobros
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/reportes`}
                                className="pro-inner-item"
                                role="button"
                                id="menu2">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i className="bi bi-9-square-fill"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Reportes
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/entidades`}
                                className="pro-inner-item"
                                role="button"
                                id="menu2">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i className="bi bi-9-square-fill"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Prueba1
                                </span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to={`/comprobantes`}
                                className="pro-inner-item"
                                role="button"
                                id="menu2">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        {<i className="bi bi-9-square-fill"></i>}
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Comprobantes
                                </span>
                            </NavLink>
                        </li>

                        <li >
                            <a href={"#mn10"}
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                className="pro-inner-item"
                                role="button">
                                <span className="pro-icon-wrapper">
                                    <span className="pro-icon">
                                        <i class="bi bi-diagram-3-fill"></i>
                                    </span>
                                </span>
                                <span className="pro-item-content">
                                    Configuracion
                                </span>
                                <span className="suffix-wrapper">
                                    <span className="badge yellow">0</span>
                                    Facturacion
                                </span>
                                <span className="pro-arrow-wrapper">
                                    <span className="pro-arrow"></span>
                                </span>
                            </a>

                            <ul className="collapse list-unstyled transition-03" id={"mn10"}>
                                <li>
                                    <NavLink to={`/configurar`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#10`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Configurar
                                            Boleta/Factura
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to={`/bancos`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Bancos
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/empresa`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Empresa
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/empleo`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Empleo
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/mensajes`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#10`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Mensajes(App)
                                            Nota Cr??dito
                                        </span>
                                    </NavLink>
                                </li>
                                <li>

                                        <NavLink to={`/consulta-comprobante`}
                                            className="pro-inner-item"
                                            role="button"
                                            id={`#10`}>
                                            <span className="pro-icon-wrapper">
                                                <span className="pro-icon">
                                                    <i className="fa fa-minus"></i>
                                                </span>
                                            </span>
                                            <span className="pro-item-content">
                                                Cursos
                                            </span>
                                        </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/directorio`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Directorio Institucional
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/presidentes`}
                                        className="pro-inner-item"
                                        role="button"
                                        id={`#`}>
                                        <span className="pro-icon-wrapper">
                                            <span className="pro-icon">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                        </span>
                                        <span className="pro-item-content">
                                            Presidente de Cap??tulo
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    {/* <ul className="list-unstyled components">
                        <p>Proyecto</p>
                        <div className="line"></div>
                        {
                            userToken.menus.map((menu, index) => (
                                menu.submenu.length === 0 && menu.estado === 1 ?
                                    <li key={index}>
                                        <NavLink to={`${url}/${menu.ruta}`}
                                            className="pro-inner-item"
                                            activeClassName='active-link'
                                            role="button"
                                            id={`${menu.ruta}`}>
                                            <span className="pro-icon-wrapper">
                                                <span className="pro-icon">
                                                    {<i className={menu.icon}></i>}
                                                </span>
                                            </span>
                                            <span className="pro-item-content">
                                                {menu.nombre}
                                            </span>
                                        </NavLink>
                                    </li>
                                    :
                                    menu.submenu.filter(submenu => submenu.estado === 1).length !== 0 ?
                                        <li key={index}>
                                            <a href={"#mn" + index}
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                className="pro-inner-item"
                                                role="button">
                                                <span className="pro-icon-wrapper">
                                                    <span className="pro-icon">
                                                        {<i className={menu.icon}></i>}
                                                    </span>
                                                </span>
                                                <span className="pro-item-content">
                                                    {menu.nombre}
                                                </span>
                                                <span className="suffix-wrapper">
                                                    <span className="badge yellow">{menu.submenu.filter(submenu => submenu.estado === 1).length}</span>
                                                </span>
                                                <span className="pro-arrow-wrapper">
                                                    <span className="pro-arrow"></span>
                                                </span>
                                            </a>

                                            <ul className="collapse list-unstyled transition-03" id={"mn" + index}>
                                                {
                                                    menu.submenu.map((submenu, indexm) => (
                                                        submenu.estado === 1 ?
                                                            <li key={indexm}>
                                                                <NavLink to={`${url}/${submenu.ruta}`}
                                                                    className="pro-inner-item"
                                                                    activeClassName='active-link'
                                                                    role="button"
                                                                    id={`${submenu.ruta}`}>
                                                                    <span className="pro-icon-wrapper">
                                                                        <span className="pro-icon">
                                                                            <i className="fa fa-minus"></i>
                                                                        </span>
                                                                    </span>
                                                                    <span className="pro-item-content">
                                                                        {submenu.nombre}
                                                                    </span>
                                                                </NavLink>
                                                            </li>
                                                            :
                                                            null
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        :
                                        null
                            ))
                        }
                    </ul> */}

                    <ul className="list-unstyled sidebar-footer">
                        <li>
                            <span className="article">
                                sdfsdf
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Menu;