import React from 'react'

const Capitulos = () => {
    return (
        
        <div>
            <section class="content-header">
                        <h3 class="no-margin"> Capitulos <small> Lista </small> </h3>
                                        </section>
        <div class="header">
        <div class ="contenido">
        <h6>Nuevo Cap./Espe.</h6>
        <button type="button" class="btn btn-success"><i class="fa fa-plus"></i> Agregar Cap./Espe.</button>
        </div>
        
        <div class ="contenido">
        <h6>Recargar.</h6>
        <button type="button" class="btn btn-light">
        <i class="fa fa-refresh"></i> Recargar</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label>Filtrar por capítulo o especialidad.</label>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="search" id="buscar" class="form-control" placeholder="Buscar por Capitulo o Especialidad" aria-describedby="search" value=""/>
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-primary" id="btnbuscar">Buscar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
</div> 
<div class=" table">
<table class="table table-striped">
<thead>
<tr class="table-danger">
  <th scope="col"style={{color:'#B72928'}}>#</th>
  <th scope="col"style={{color:'#B72928'}}>Capitulo</th>
  <th scope="col"style={{color:'#B72928'}}>Especialidad</th>
  <th scope="col"style={{color:'#B72928'}}>Editar</th>
  <th scope="col"style={{color:'#B72928'}}>Elim. Cap.</th>
  <th scope="col"style={{color:'#B72928'}}>Elim. Espec.</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
  <td><button class="btn btn-warning btn-xs" onclick="loadDataRol('1')"><i class="fa fa-edit"></i></button></td>
  <td><button class="btn btn-danger btn-xs" onclick="eliminarRol('1')"><i class="fa fa-trash" ></i></button></td>
  <td><button class="btn btn-danger btn-xs" onclick="eliminarRol('1')"><i class="fa fa-trash" ></i> </button></td>
</tr>
<tr>
  <th scope="row">2</th>
  <td>Jacob</td>
  <td>Thornton</td>
  <td><button class="btn btn-warning btn-xs" onclick="loadDataRol('1')"><i class="fa fa-edit"></i></button></td>
 
  <td><button class="btn btn-danger btn-xs" onclick="eliminarRol('1')"><i class="fa fa-trash" ></i></button></td>
  <td><button class="btn btn-danger btn-xs" onclick="eliminarRol('1')"><i class="fa fa-trash" ></i> </button></td>
</tr>
<tr>
  <th scope="row">3</th>
  <td colspan="2">Larry the Bird</td>
  <td><button class="btn btn-warning btn-xs" onclick="loadDataRol('1')"><i class="fa fa-edit"></i></button></td>
  <td><button class="btn btn-danger btn-xs" onclick="eliminarRol('1')"><i class="fa fa-trash" ></i></button></td>
  <td><button class="btn btn-danger btn-xs" onclick="eliminarRol('1')"><i class="fa fa-trash" ></i> </button></td>
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

export default Capitulos