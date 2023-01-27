import React from 'react'

const HIngeniero = () => {
    return (
        <div>
            <div>
                <h5>Certificado Proyecto<small>Lista</small></h5>
            </div>
            <section className='container-mg' style={{ padding: '0' }}>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <button type="button" class="btn btn-light"> <i class="bi bi-arrow-clockwise"></i>Recargar Vista</button>  </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>

                                <button type="button" class="btn btn-success"><i class="bi bi-file-earmark-excel"></i>Generar Excel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Habilidad</p>
                                <div className='form-group'>
                                    <select className='form-control'>
                                        <option value='0'>- Todos -</option>
                                        <option value='1'>Habilitados</option>
                                        <option value='2'>No Habilitados</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Capitulo</p>
                                <div className='form-group'>
                                    <select className='form-control'>
                                        <option value='0'>- Seleccione -</option>
                                        <option value='1'>AGRONOMIA</option>
                                        <option value='2'>ALIMENTARIAS</option>
                                        <option value='3'>CIVIL</option>
                                        <option value='4'>ELECTRONICA</option>
                                        <option value='5'>FORESTAL</option>
                                        <option value='8'>INDUSTRIAL</option>
                                        <option value='10'>MECANICA</option>
                                        <option value='12'>METALURGIA</option>
                                        <option value='13'>MINAS</option>
                                        <option value='14'>QUIMICA</option>
                                        <option value='16'>SISTEMAS</option>
                                        <option value='18'>ZOOTECNIA</option>
                                        <option value='24'>AMBIENTAL</option>
                                        <option value='25'>ELECTRICA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Especialidad</p>
                                <div className='form-group'>
                                    <select className='form-control'>
                                        <option value='0'>- Todos -</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
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
                            <div className='card-body' style={{ padding: '1rem 0 0 0' }}>
                                <p className='card-title'>Fecha Inicial Pago Cuota.</p>
                                <div className='form-group'>
                                    <input type='date' className='form-control'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card' style={{ border: 'none' }}>
                            <div className='card-body' style={{ padding: '1rem 0 0 0 ' }}>
                                <p className='card-title'>Fecha Final Pago Cuota.</p>
                                <div className='form-group'>
                                    <input type='date' className='form-control'></input>
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
                                <th scope="col" style={{ color: '#b72928' }}>Cip</th>
                                <th scope="col" style={{ color: '#b72928' }}>Colegiado</th>
                                <th scope="col" style={{ color: '#b72928' }}>Condicion</th>
                                <th scope="col" style={{ color: '#b72928' }}>Capit./Espe.</th>
                                <th scope="col" style={{ color: '#b72928' }}>Fecha Colegiado</th>
                                <th scope="col" style={{ color: '#b72928' }}>Fecha Ult Cuota</th>
                                <th scope="col" style={{ color: '#b72928' }}>Habilidad</th>
                                <th scope="col" style={{ color: '#b72928' }}>Habilidad Hasta</th>
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

export default HIngeniero