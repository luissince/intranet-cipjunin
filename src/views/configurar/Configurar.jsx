import React from 'react'

const Configurar = () => {
    return (
        <section class="content-header">
                        <h3 class="no-margin"> Configuración <small> Lista </small> </h3>
                    
        <div class="row">
            
                            <div class="col-md-6">
                                
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <h5 class="no-margin"> Correlativo Certificados</h5>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <table class="table">
                                                    <thead style={ {backgroundcolor: '#FDB2B1', color:' #B72928'}}>
                                                        <tr>
                                                            <th width="5%">#</th>
                                                            <th width="25%">Certificado</th>
                                                            <th width="25%">Correlativo</th>
                                                            <th width="10%">Resetear</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="tbCorrelativoCert">
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Certificado de Habilidad</td>
                                                            <td>44101</td>
                                                            <td><button class="btn btn-warning btn-xs" onclick="onReset('1','Certificado de Habilidad')"><i class="fa fa-refresh" style={{fontsize:'20px'}}></i></button></td></tr>
                                                            <tr><td>2</td><td>Certificado de Obra Pública</td><td>0</td>
                                                            <td><button class="btn btn-warning btn-xs" onclick="onReset('2','Certificado de Obra Pública')"><i class="fa fa-refresh" style={{fontsize:'20px'}}></i></button></td></tr>
                                                            <tr><td>3</td><td>Certificado de Proyecto</td>
                                                            <td>0</td><td><button class="btn btn-warning btn-xs" onclick="onReset('3','Certificado de Proyecto')"><i class="fa fa-refresh" style={{fontsize:'20px'}}></i></button></td></tr></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        </section>
    )
}

export default Configurar;