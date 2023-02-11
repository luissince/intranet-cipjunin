import React from 'react'

const Directorio = () => {
    return (
        <section class="content-header">
        <h3 class="no-margin"> Directivos <small> Lista </small> </h3>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="fa fa-home"></i> Inicio</a></li>
            <li class="active">Directivo</li>
        </ol>
        <section class="content">
                        <div class="invoice">
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                    <label>Nueva Persona</label>
                                    <div class="form-group">
                                        <button type="button" class="btn btn-success" id="btnNuevo">
                                            <i class="fa fa-plus"></i> Agregar
                                        </button>
                                    </div>
                                </div>

                                <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                    <label>Opción</label>
                                    <div class="form-group">
                                        <button class="btn btn-default" id="btnActualizar">
                                            <i class="fa fa-refresh"></i> Recargar
                                        </button>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label>Filtrar por cipo o nombre y apellido.</label>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="search" id="buscar" class="form-control" placeholder="Escribe y presiona enter para filtrar" aria-describedby="search" value=""/>
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-primary" id="btnSearch">Buscar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped" style={{borderwidth: '1px',borderstyle: 'dashed',bordercolor: '#E31E25'}}>
                                            <thead style={{backgroundcolor: '#FDB2B1',color: '#B72928'}}>
                                                <tr class='table-danger'><th width="5%" class="text-center">#</th>
                                                <th width="10%">Cip</th>
                                                <th width="20%">Ingeniero</th>
                                                <th width="10%">Fecha Inicio</th>
                                                <th width="10%">Fecha Final</th>
                                                <th width="15%">Puesto</th>
                                                <th width="5%">Firma</th>
                                                <th width="5%">Estado</th>
                                                <th width="5%" class="text-center">Editar</th>
                                                <th width="5%" class="text-center">Eliminar</th>
                                            </tr></thead>
                                            <tbody id="tbTable"><tr>
                                <td class="text-center text-primary"> 1 </td>
                                <td> 1559 </td>
                                <td> 19815470<br/>ARIAS RODRIGUEZ, MARCOS MAGNO </td>
                                <td> 01/10/2022 </td>
                                <td> 31/10/2022 </td>
                                <td> DECANO </td>
                                <td> <span class="badge btn-info">USAR</span> </td>
                                <td> <span class="badge btn-info">ACTIVO</span> </td>
                                <td class="text-center"> <button class="btn btn-warning btn-xs" title="Editar" onclick="openUpdateModalDirectorio(2 )"><i class="fa fa-edit" style={{fontsize:'25px'}}></i></button> </td>
                                <td class="text-center"> <button class="btn btn-danger btn-xs" title="Eliminar" onclick="deleteModalDirectorio(2)"><i class="fa fa-trash" style={{fontsize:'25px'}}></i></button> </td>
                                </tr><tr>
                                <td class="text-center text-primary"> 2 </td>
                                <td> 1559 </td>
                                <td> 19815470<br/>ARIAS RODRIGUEZ, MARCOS MAGNO </td>
                                <td> 01/10/2022 </td>
                                <td> 31/10/2022 </td>
                                <td> DECANO </td>
                                <td> <span class="badge btn-danger">NO USAR</span> </td>
                                <td> <span class="badge btn-danger">INACTIVO</span> </td>
                                <td class="text-center"> <button class="btn btn-warning btn-xs" title="Editar" onclick="openUpdateModalDirectorio(1 )"><i class="fa fa-edit" style={{fontsize:'25px'}}></i></button> </td>
                                <td class="text-center"> <button class="btn btn-danger btn-xs" title="Eliminar" onclick="deleteModalDirectorio(1)"><i class="fa fa-trash" style={{fontsize:'25px'}}></i></button> </td>
                                </tr></tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-12" style={{textalign: 'center'}}>
                                        <ul class="pagination">
                                            <li>
                                                <button class="btn btn-primary" id="btnIzquierda">
                                                    <i class="fa fa-toggle-left"></i>
                                                </button>
                                            </li>
                                            <li>
                                                <span id="lblPaginaActual" class="font-weight-bold">1</span>
                                            </li>
                                            <li><span>a</span></li>
                                            <li>
                                                <span id="lblPaginaSiguiente" class="font-weight-bold">1</span>
                                            </li>
                                            <li>
                                                <button class="btn btn-primary" id="btnDerecha">
                                                    <i class="fa fa-toggle-right"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
    </section>
    )
}

export default Directorio;