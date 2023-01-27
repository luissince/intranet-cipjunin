import React from 'react'

const CObra = () => {
    return (
        <div>
            <div>
                <h5>Certificados de Residencia de Obra<small>Lista</small></h5>
            </div>
            <section className='container-mg' style={{ padding: '0' }}>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Fecha de Inicio(Entre Fechas)</p>
                                <div className='form-group'>
                                    <input type='date' className='form-control'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p className='card-title'>Fecha de Fin(Entre Fechas).</p>
                                <div className='form-group'>
                                    <input type='date' className='form-control'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
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
                                <p className='card-title'>Opccion.</p>
                                <a className='btn ' style={{ backgroundColor: '#e7e7e7' }}><i className="bi bi-arrow-clockwise"></i>Recargar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='table-responsive' style={{ color: 'red', marginTop: '1rem' }}>
                    <table className="table table-borderless table-danger" style={{ borderWidth: '1px', borderStyle: 'dashed', borderColor: '#E31E25' }} >
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#b72928' }}>#</th>
                                <th scope="col" style={{ color: '#b72928' }}>Editar</th>
                                <th scope="col" style={{ color: '#b72928' }}>Usuario</th>
                                <th scope="col" style={{ color: '#b72928' }}>Especialidad</th>
                                <th scope="col" style={{ color: '#b72928' }}>N⁰ Cert.</th>
                                <th scope="col" style={{ color: '#b72928' }}>Estado</th>
                                <th scope="col" style={{ color: '#b72928' }}>Modalidad</th>
                                <th scope="col" style={{ color: '#b72928' }}>Propietario</th>
                                <th scope="col" style={{ color: '#b72928' }}>Proyecto</th>
                                <th scope="col" style={{ color: '#b72928' }}>Monto</th>
                                <th scope="col" style={{ color: '#b72928' }}>Lugar</th>
                                <th scope="col" style={{ color: '#b72928' }}>Fecha Pago</th>
                                <th scope="col" style={{ color: '#b72928' }}>Fecha Venc.</th>
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

export default CObra