import React from 'react'

const Cursos = () => {
    return (
        <section class="content-header">
                        <h3 class="no-margin"> Cursos <small> Lista </small> </h3>
                        <ol class="breadcrumb">
                            <li><a href="index.php"><i class="fa fa-home"></i> Inicio</a></li>
                            <li class="active">Curso</li>
                        </ol>
                        <section class="content">
                        <div class="invoice">
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                    <label>Nuevo curso.</label>
                                    <div class="form-group">
                                        <button type="button" class="btn btn-success" id="btnNuevo">
                                            <i class="fa fa-plus"></i> Agregar curso
                                        </button>
                                    </div>
                                </div>

                                <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                    <label>Opción.</label>
                                    <div class="form-group">
                                        <button class="btn btn-default" id="btnActualizar">
                                            <i class="fa fa-refresh"></i> Recargar
                                        </button>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label>Filtrar por curso o capitulo.</label>
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
                                                <th width="20%">Curso</th>
                                                <th width="10%">Serie/Correlativo</th>
                                                <th width="20%">Organizador</th>
                                                <th width="10%">Capitulo</th>
                                                <th width="15%">Fecha/Hora</th>
                                                <th width="10%">Estado</th>
                                                <th width="10%" class="text-center">Inscripción</th>
                                                <th width="5%" class="text-center">Editar</th>
                                                <th width="5%" class="text-center">Eliminar</th>
                                            </tr></thead>
                                            <tbody id="tbTable"><tr>
                                <td class="text-center text-primary"> 1 </td>
                                <td> QWEQWE </td>
                                <td> cd-1 </td>
                                <td> QWE </td>
                                <td class="text-danger"> AGRONÓMICA </td>
                                <td> 05/10/2022 <br/> 09:43:09 am </td>
                                <td> <span class="badge btn-info">ACTIVO</span> </td>
                                <td class="text-center"> <button class="btn btn-success btn-xs" title="Inscribir" onclick="linkInscripcion('1','QWEQWE','AGRONÓMICA','0.0','0.0','05/10/2022','09:43:09.0000000')"><i class="fa fa-id-card" style={{fontsize:'25px'}}></i></button> </td>
                                <td class="text-center"> <button class="btn btn-warning btn-xs" title="Editar" onclick="openUpdateModalCurso(1)"><i class="fa fa-edit" style={{fontsize:'25px'}}></i></button> </td>
                                <td class="text-center"> <button class="btn btn-danger btn-xs" title="Eliminar" onclick="delteModalCurso(1)"><i class="fa fa-trash" style={{fontsize:'25px'}}></i></button> </td>
                                </tr></tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-12" style={{textalign:'center'}}>
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

export default Cursos;