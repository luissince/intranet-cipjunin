import React from 'react'

const Mensajes = () => {
    return (
        <section class="content-header">
        <h3 class="no-margin"> Mensajes (App) <small> Lista </small> </h3>

        <section class="content">

                        <div class="row">                
                            <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                <label>Nueva oferta.</label>
                                <div class="form-group">
                                    <button type="button" class="btn btn-success" id="btnNuevo">
                                        <i class="fa fa-paper-plane"></i> Crear Mensaje
                                    </button>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                <label>Opción.</label>
                                <div class="form-group">
                                    <button class="btn btn-default" id="btnactualizar">
                                        <i class="fa fa-refresh"></i> Recargar
                                    </button>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label>Filtrar por titulo o descripcíon.</label>
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="search" id="buscar" class="form-control" placeholder="Buscar por titulo o descripcíon" aria-describedby="search" value=""/>
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
                                        <thead style={{backgroundcolor:' #FDB2B1',color: '#B72928'}}>
                                            <tr class ='table-danger'><th width="5%" class="text-center">#</th>
                                            <th width="30%">Titulo</th>
                                            <th width="15%">Fecha/Hora</th>
                                            <th width="10%">Celular</th>
                                            <th width="20%">Empresa</th>
                                            <th width="10%">Estado</th>
                                            <th width="5%" class="text-center">Editar</th>
                                            <th width="5%" class="text-center">Eliminar</th>
                                        </tr></thead>
                                        <tbody id="tbTable">
                                            <tr>
                                                <td class="text-center" colspan="8">No hay datos.</td>
                                            </tr>
                                        </tbody>
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
                                            <span id="lblPaginaActual" class="font-weight-bold">0</span>
                                        </li>
                                        <li><span>a</span></li>
                                        <li>
                                            <span id="lblPaginaSiguiente" class="font-weight-bold">0</span>
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
                    </section>
    </section>
    )
}

export default Mensajes;