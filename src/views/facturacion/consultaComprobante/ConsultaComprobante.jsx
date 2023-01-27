import React from 'react'

const ConsultaComprobante = () => {
    return (
        <div>
            <div>
                <h5>Comprobante Electronico<small>Consulta</small></h5>
            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Consulta Avanzada</a>
                </li>
            </ul>
            <div className="container-mg" style={{ padding: '2rem 0 2rem 0' }}>
                <div className="row">
                    <div className="col-lg-6">
                        <h6>Credenciales</h6>
                        <form>
                            <div className="mb-3">
                                <label for="numberInput" className="form-label">Ruc:</label>
                                <input type="text" className="form-control" id="numberInput" aria-describedby="emailHelp" placeholder='Ingrese un RUC' />
                            </div>
                            <div className="mb-3">
                                <label for="usuarioInput" className="form-label">Usuario:</label>
                                <input type="text" className="form-control" id="usuarioInput" placeholder='Escriba su nombre de Usuario' />
                            </div>
                            <div className="mb-3">
                                <label className="form-check-label" for="passwordUser">Contraseña:</label>
                                <input type="password" className="form-control" id="passwordUser" placeholder='Escriba su contraseña' />
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6">
                        <h6>Datos del Comprobante:</h6>
                        <form>
                            <div className="mb-3">
                                <label for="numberInput" className="form-label">Ruc Emisor:</label>
                                <input type="text" className="form-control" id="numberInput" aria-describedby="emailHelp" placeholder='Ingrese un RUC' />
                            </div>
                            <div className="mb-3">
                                <label for="usuarioInput" className="form-label">Usuario:</label>
                                <select className='form-control'>
                                    <option selected>Seleccione</option>
                                    <option value="01">01 -Factura</option>
                                    <option value="03">03 - Boleta de Ventas</option>
                                    <option value="07">07 - Nota de Credito</option>
                                    <option value="08">08 - Nota de Débito</option>
                                    <option value="R1">R1 - Recibo por Honorarios</option>
                                    <option value="04">04 - Liquidacion de Compra</option>
                                    <option value="23">23 - Póliza de Adjudicion Electronica</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="numberInput" className="form-label">Serie</label>
                                <input type="text" className="form-control" id="numberInput" aria-describedby="emailHelp" placeholder='F001/B001/etc' />
                            </div>
                            <div className="mb-3">
                                <label for="numberInput" className="form-label">Correlativo</label>
                                <input type="number" className="form-control" id="numberInput" aria-describedby="emailHelp" placeholder='Ingrese correlativo (1,2,3)' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row' style={{ padding: '16px' }} >
                    <div style={{ padding: '3px' }}>
                        <button className='btn btn-success' style={{ padding: '7px' }}>Consultar Estado</button>
                    </div>
                    <div style={{ padding: '3px' }}>
                        <button className='btn' style={{ backgroundColor: '#003366', color: 'white', padding: '7px' }}>Consultar CDR</button>
                    </div>
                    <div style={{ padding: '3px' }}>
                        <button className='btn btn-danger'>Limpiar</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h6>Resultado:</h6>
                        <p>Codigo:</p>
                        <p>Mensaje:</p>
                        <p>Ruta de recarga:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultaComprobante