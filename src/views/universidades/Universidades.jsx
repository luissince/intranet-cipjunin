
import './Universidades.css';
const Universidades = () => {

    return (
        <div>
        <div class="header">
        <div class ="contenido">
        <h6>Nuevo Universidad.</h6>
        <button type="button" class="btn btn-success"><i class="fa fa-plus"></i> Nueva Universidad</button>
        </div>
        
        <div class ="contenido">
        <h6>Recargar.</h6>
        <button type="button" class="btn btn-light">
        <i class="fa fa-refresh"></i> Recargar</button>
        </div>
      <div >
        <h6>Filtrar por nombre de Universidad.</h6>
       
  
        <div class="form-group">
        <div class="input-group">
                 <input class="form-control" type="search" placeholder="Buscar por Nombres de Rol" aria-label="Search"/>
                <div>
                <button type="submit" class="btn btn-primary" >Buscar</button>
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
  <th scope="col">Universidad</th>
  <th scope="col">Sigla</th>
  <th scope="col">Estado</th>
  <th scope="col">Editar</th>
  <th scope="col">Eliminar</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
  <td>@mdo</td>
  <td><button class="btn btn-warning btn-xs" onclick="loadDataRol('1')"><i class="fa fa-edit"></i></button></td>
  <td><button class="btn btn-danger btn-xs" onclick="eliminarRol('1')"><i class="fa fa-trash" ></i> </button></td>
</tr>
<tr>
  <th scope="row">2</th>
  <td>Jacob</td>
  <td>Thornton</td>
  <td>@fat</td>
 
  <td><button class="btn btn-warning btn-xs" onclick="loadDataRol('1')"><i class="fa fa-edit"></i></button></td>
  <td><button class="btn btn-danger btn-xs" onclick="eliminarRol('1')"><i class="fa fa-trash" ></i> </button></td>
</tr>
<tr>
  <th scope="row">3</th>
  <td colspan="2">Larry the Bird</td>
  <td>@twitter</td>
  <td><button class="btn btn-warning btn-xs" onclick="loadDataRol('1')"><i class="fa fa-edit"></i></button></td>
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
    );
}

export default Universidades;