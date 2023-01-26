import React from 'react'

const Entidades = () => {
    return (
        <div>
            <div>
                <h5>Entidades <small>Lista</small></h5>
            </div>
            <section className='container-mg' style={{ padding: '0' }}>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Nueva Entidad.</p>
                                <a className='btn btn-success'><i className="bi bi-plus"></i>Agregar Entidad</a>
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
                    <div className='col-lg-6'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p className='card-title'>Finalizar por razón social.</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="input-group-text" id="basic-addon2">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='table-responsive' style={{ color: 'red' }}>
                    <table className="table table-borderless table-danger" style={{ borderWidth: '1px', borderStyle: 'dashed', borderColor: '#E31E25' }} >
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#ea7054' }}>#</th>
                                <th scope="col" style={{ color: '#ea7054' }}>Numero de Ruc</th>
                                <th scope="col" style={{ color: '#ea7054' }}>Nombre</th>
                                <th scope="col" style={{ color: '#ea7054' }}>Direccion</th>
                                <th scope="col" style={{ color: '#ea7054' }}>Telefono</th>
                                <th scope="col" style={{ color: '#ea7054' }}>Pagina Web</th>
                                <th scope="col" style={{ color: '#ea7054' }}>Electronico</th>
                                <th scope="col" style={{ color: '#ea7054' }}>Editar</th>
                                <th scope="col" style={{ color: '#ea7054' }}>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className='table-light'>
                            <tr>
                                <th scope="row" >1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
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

export default Entidades