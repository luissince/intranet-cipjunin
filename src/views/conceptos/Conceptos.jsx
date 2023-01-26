import React from 'react'

const Conceptos = () => {
    return (
        <div>
            <section class="content-header">
                        <h3 class="no-margin"> Conceptos de cobros <small> Lista </small> </h3>
                    </section>
        <div class="header">
        <div class ="contenido">
        <h6>Nuevo Concepto.</h6>
        <button type="button" class="btn btn-success"><i class="fa fa-plus"></i> Agregar</button>
        </div>
        
        <div class ="contenido">
        <h6>Opcion.</h6>
        <button type="button" class="btn btn-light">
        <i class="fa fa-refresh"></i> Recargar</button>
        </div>

        <div class="col-md-3 col-sm-12 col-xs-12">
                                <label>Categoría.</label>
                                <div class="form-group">
                                    <select class="form-control" id="cbTipoCategorias">
                                        <option value="0">- - Seleccione - -</option>
                                        <option value="1">Cuota ordinaria</option>
                                        <option value="2">Cuota ordinaria (Admistia)</option>
                                        <option value="3">Cuota ordinaria (Vitalicio)</option>
                                        <option value="12">Cuota ordinaria (Resolución 15)</option>
                                        <option value="4">Colegiatura ordinaria</option>
                                        <option value="9">Colegiatura otras modalidades</option>
                                        <option value="10">Colegiatura por tesis local</option>
                                        <option value="11">Colegiatura por tesis externa</option>
                                        <option value="5">Certificado de habilidad</option>
                                        <option value="6">Certificado de residencia de obra</option>
                                        <option value="7">Certificado de Proyecto</option>
                                        <option value="8">Peritaje</option>
                                        <option value="100">Ingresos Diversos</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-5 col-sm-12 col-xs-12">
                                <label>Filtrar por categoría, concepto.</label>
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="search" id="buscar" class="form-control" placeholder="Buscar por nombres del concepto" aria-describedby="search" value=""/>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-primary" id="btnBuscar">Buscar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
</div> 
<div class=" table">
<table class="table table-striped">
<thead>
<tr class="table-danger">
  <th scope="col">#</th>
  <th scope="col" style={{color:'#B72928'}}>Codigo</th>
  <th scope="col" style={{color:'#B72928'}}>Categoria</th>
  <th scope="col" style={{color:'#B72928'}}>Concepto</th>
  <th scope="col" style={{color:'#B72928'}}>Precio</th>
  <th scope="col" style={{color:'#B72928'}}>Especificación</th>
  <th scope="col" style={{color:'#B72928'}}>Asignado</th>
  <th scope="col" style={{color:'#B72928'}}>Impuesto</th>
  <th scope="col" style={{color:'#B72928'}}>Estado</th>
  <th scope="col" style={{color:'#B72928'}}>Editar</th>
  <th scope="col" style={{color:'#B72928'}}>Eliminar</th>
</tr>
</thead>
<tbody>


<tr>
<td class="text-center text-primary">1</td>
<td class="text-left">759230</td>
<td class="text-left">Cuota ordinaria</td>
<td class="text-left">Cuotas al ISS CIP</td>
<td class="text-left">2.50</td>
<td class="text-left">Se deriva al CIP NACIONAL</td>
<td class="text-left">Precio Ordinario</td>
<td class="text-left">EXONERADO - OPERACION ONEROSA</td>
<td class="text-center"><span class="label label-success">Activo</span></td>
<td class="text-center"><button class="btn btn-warning btn-xs" onclick="loadUpdateConceptos('4')"><i class="fa fa-edit" ></i> </button></td>
<td class="text-center"><button class="btn btn-danger btn-xs" onclick="DeleteConcepto('4')"><i class="fa fa-trash" ></i> </button></td>
</tr>
<tr>
<td class="text-center text-primary">2</td>
<td class="text-left">759230</td>
<td class="text-left">Cuota ordinaria</td>
<td class="text-left">Cuotas al ISS CIP</td>
<td class="text-left">1.50</td>
<td class="text-left">Se deriva al CIP NACIONAL</td>
<td class="text-left">Precio Ordinario</td>
<td class="text-left">EXONERADO - OPERACION ONEROSA</td>
<td class="text-center"><span class="label label-danger">Inactivo</span></td>
<td class="text-center"><button class="btn btn-warning btn-xs" onclick="loadUpdateConceptos('3')"><i class="fa fa-edit"></i> </button></td>
<td class="text-center"><button class="btn btn-danger btn-xs" onclick="DeleteConcepto('3')"><i class="fa fa-trash"></i> </button></td></tr>

<tr>
<td class="text-center text-primary">3</td>
<td class="text-left">759230</td>
<td class="text-left">Cuota ordinaria</td>
<td class="text-left">Cuotas al ISS CIP</td>
<td class="text-left">1.05</td>
<td class="text-left">Se deriva al CIP NACIONAL</td>
<td class="text-left">Precio Ordinario</td>
<td class="text-left">EXONERADO - OPERACION ONEROSA</td>
<td class="text-center"><span class="label label-danger">Inactivo</span></td>
<td class="text-center"><button class="btn btn-warning btn-xs" onclick="loadUpdateConceptos('2')"><i class="fa fa-edit" ></i> </button></td>
<td class="text-center"><button class="btn btn-danger btn-xs" onclick="DeleteConcepto('2')"><i class="fa fa-trash" ></i> </button></td>
</tr>
</tbody>
</table>
</div>

<div class="footer">
<nav aria-label="...">
<ul class="pagination">
<li class="page-item disabled">
  <a class="page-link">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item active" aria-current="page">
  <a class="page-link" href="#">2</a>
</li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
  <a class="page-link" href="#">Next</a>
</li>
</ul>
</nav>
</div>
    </div>
    )
}
export default Conceptos;