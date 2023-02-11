import React from 'react'
import { images } from '../../../constants/';


const NotaCredito = () => {
    return (
        <div>
            <div>
                <h5>Nota Credito<small>Lista</small></h5>
            </div>
            <section className='container-mg' style={{ padding: '0' }}>
                <div className='row'>
                    <div className='col-lg-3'>
                        <button className='btn btn-success'><i class="bi bi-plus-lg"></i>Nueva Nota de Credito</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p>
                                    <img src={images.sunatlogo} width='28'></img>
                                    Estados SUNAT:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p>
                                    <img src={images.aceptadoSunat} width='28'></img>
                                    Aceptado
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p>
                                    <img src={images.rechazadoSunat} width='28'></img>
                                    Rechazado
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p>
                                    <img src={images.pendiente} width='28'></img>
                                    Pendiente de Envio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p>
                                    <img src={images.anuladoSunat} width='28'></img>
                                    Comunicaciôn de Baja (Anulado)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Fecha de inicio(Entre Fechas).</p>
                                <div className='form-group'>
                                    <input type='date' className='form-control'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p className='card-title'>Fecha de fin(Entre Fechas).</p>
                                <div className='form-group'>
                                    <input type='date' className='form-control'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p className='card-title'>Envio Masivo</p>
                                <a className='btn btn-danger '><i className="fa fa-gg-circle"></i>Envio masivo a Sunat</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-5'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Filtrar por colegiado, N° certificado.</p>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Escribe para filtrar automaticamente" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="btn" style={{ color: 'white', backgroundColor: '#444f7f' }} id="basic-addon2">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p className='card-title'>Opcion</p>
                                <a className='btn ' style={{ backgroundColor: '#e7e7e7' }}><i className="bi bi-arrow-clockwise"></i>Actualizar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='table-responsive' style={{ color: 'red', marginTop: '1rem' }}>
                    <table className="table table-borderless table-danger" style={{ borderWidth: '1px', borderStyle: 'dashed', borderColor: '#E31E25' }} >
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#b72928' }}>#</th>
                                <th scope="col" style={{ color: '#b72928' }}>Anular</th>
                                <th scope="col" style={{ color: '#b72928' }}>P.D.F</th>
                                <th scope="col" style={{ color: '#b72928' }}>Detalle</th>
                                <th scope="col" style={{ color: '#b72928' }}>Comprobante</th>
                                <th scope="col" style={{ color: '#b72928' }}>Colegiado</th>
                                <th scope="col" style={{ color: '#b72928' }}>Modificado</th>
                                <th scope="col" style={{ color: '#b72928' }}>Estado</th>
                                <th scope="col" style={{ color: '#b72928' }}>total</th>
                                <th scope="col" style={{ color: '#b72928' }}>Estado Sunat</th>
                                <th scope="col" style={{ color: '#b72928' }}>Observaciones Sunat</th>
                            </tr>
                        </thead>
                        <tbody className='table-light'>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default NotaCredito