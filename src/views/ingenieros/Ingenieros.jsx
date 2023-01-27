import React from 'react'

const Ingenieros = () => {
    return (
        <div>
            <div>
                <h5>Ingenieros<small>Lista</small></h5>
            </div>
            <section className='container-mg' style={{ padding: '0' }}>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Nuevo Ingeniero</p>
                                <div className='form-group'>
                                    <button type='button' className='btn btn-success'>
                                        <i class="bi bi-plus-lg"></i>
                                        Agregar Ingeniero
                                    </button>
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
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'> Filtrar por cip, dni, apellidos y nombres.</p>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Buscar por Nombres y Apellidos" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="btn" style={{ color: 'white', backgroundColor: '#444f7f' }} id="basic-addon2">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='table-responsive' style={{ color: 'red', marginTop: '1rem' }}>
                    <table className="table table-borderless table-danger" style={{ borderWidth: '1px', borderStyle: 'dashed', borderColor: '#E31E25' }} >
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#b72928' }}>#</th>
                                <th scope="col" style={{ color: '#b72928' }}>Clip</th>
                                <th scope="col" style={{ color: '#b72928' }}>Colegio</th>
                                <th scope="col" style={{ color: '#b72928' }}>Capit./Expec.</th>
                                <th scope="col" style={{ color: '#b72928' }}>Sexo</th>
                                <th scope="col" style={{ color: '#b72928' }}>Esado Civil</th>
                                <th scope="col" style={{ color: '#b72928' }}>Condicion</th>
                                <th scope="col" style={{ color: '#b72928' }}>Fecha Registro</th>
                                <th scope="col" style={{ color: '#b72928' }}>Historial</th>
                                <th scope="col" style={{ color: '#b72928' }}>Editar</th>
                                <th scope="col" style={{ color: '#b72928' }}>Eliminar</th>
                                <th scope="col" style={{ color: '#b72928' }}>Reporte</th>
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

export default Ingenieros