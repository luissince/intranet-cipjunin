import React from "react";

import { images } from '../../constants/';

const Reportes = () => {
    return (
        <div className="">
            <div style={{ backgroundColor: "#f5f5f5", padding: '10px', display: 'flex', flexDirection: 'column' }}>
                <p style={{ margin: '0 0 auto' }}>
                    <span>
                        <i class="bi bi-person"></i>
                    </span>{" "}
                    Reportes
                </p>
            </div>
            <div className="container-lg">
                <div className="row row-cols-lg-3" style={{ marginTop: '2rem' }} >
                    <div class="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="card text-center" style={{ width: '12rem' }}>
                            <button type="button" className="card-body btn btn-light" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => console.log('botnClickMe')}>
                                <img src={images.resumenIngresos} className="img-fuild" alt="Logo" width="87" />
                                <p>Resumen de Ingresos</p>
                            </button>
                        </div>
                    </div>
                    <div class="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="card" style={{ width: '12rem' }}>
                            <button type="button" className="card-body btn btn-light" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => console.log('botnClickMe')}>
                                <img src={images.resumenIngresos} className="img-fuild" alt="Logo" width="87" />
                                <p>Reporte de Colegios</p>
                            </button>
                        </div>
                    </div>
                    <div class="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="card" style={{ width: '12rem' }}>
                            <button type="button" className="card-body btn btn-light" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => console.log('botnClickMe')}>
                                <img src={images.resumenIngresos} className="img-fuild" alt="Logo" width="87" />
                                <p>Resumen de Aporte al CIN</p>
                            </button>
                        </div>
                    </div>
                    <div class="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="card" style={{ width: '12rem' }}>
                            <button type="button" className="card-body btn btn-light" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => console.log('botnClickMe')}>
                                <img src={images.resumenIngresos} className="img-fuild" alt="Logo" width="87" />
                                <p>Reporte Global</p>
                            </button>
                        </div>
                    </div>
                    <div class="col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="card" style={{ width: '12rem' }}>
                            <button type="button" className="card-body btn btn-light" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => console.log('botnClickMe')}>
                                <img src={images.resumenIngresos} className="img-fuild" alt="Logo" width="87" />
                                <p>Reporte de Comprobante Emitido</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Reportes;
