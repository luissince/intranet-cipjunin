import './Roles.css';


const Roles = () => {

    return (
        <div>
            <div class="header">
            <div class ="contenido">
            <h6>Nuevo Rol.</h6>
            <button type="button" class="btn btn-success"> + Nuevo boton</button>
            </div>
            
            <div class ="contenido">
            <h6>Recargar.</h6>
            <button type="button" class="btn btn-light">Recargar</button>
            </div>
          <div >
            <h6>Filtrar por nombre.</h6>
            <nav class="navbar navbar-light" id="busqueda_rol">
            <div class="container-fluid">
            <form class="d-flex">
                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

                    <button type="submit" class="btn btn-primary" >Buscar</button>
                         </form>
                         
                </div>
           
</nav>
</div>
</div> 
<div class=" table">
<table class="table table-striped">
  <thead>
    <tr class="table-danger">
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Estado</th>
      <th scope="col">Modulos</th>
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
      <td>e</td>
      <td>edit</td>
      <td>eli</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>e</td>
      <td>edit</td>
      <td>eli</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>e</td>
      <td>edit</td>
      <td>eli</td>
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
export default Roles;

