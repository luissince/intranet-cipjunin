import React from 'react'

const Empresa = () => {
    return (
        <section class="content-header">
                        <h3 class="no-margin"> Empresa <small> Configuración </small> </h3>
                        <section class="content">
                        <div class="row">
                            <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label>
                                            <i></i>
                                            R.U.C:
                                        </label>
                                        <div class="form-group">
                                            <input id="txtNumDocumento" class="form-control" type="text" placeholder="R.U.C."/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label class="lbl-titulo ">
                                            <i></i>
                                            Razón Social
                                        </label>
                                        <div class="form-group">
                                            <input id="txtRazonSocial" class="form-control" type="text" placeholder="Razón Social"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label>
                                            <i></i>
                                            Nombre Comercial
                                        </label>
                                        <div class="form-group">
                                            <input id="txtNomComercial" class="form-control" type="text" placeholder="Nombre Comercial"/>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12 text-center margin">
                                        <img class="img-responsive img-thumbnail" style={{width: '160px',height:'160px'}} id="lblImagen" src="images/noimage.jpg"/>
                                       
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12 text-center margin">
                                        <label for="SubirImagen" class="btn btn-warning"><i class="fa fa-photo"></i> Subir imagen</label>
                                        <input type="file" id="SubirImagen" style={{display:'none', accept:'image/png, image/jpeg, image/gif, image/svg'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label>
                                    <i></i>
                                    Dirección Fiscal:
                                </label>
                                <div class="form-group">
                                    <input id="txtDireccion" class="form-control" type="text" placeholder="Ingrese su dirección fiscal"/>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label>
                                    <i></i>
                                    Horario de Atención:
                                </label>
                                <div class="form-group">
                                    <input id="txtHorario" class="form-control" type="text" placeholder="Ingrese el horario de Atención"/>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label>
                                    <i></i>
                                    Teléfono
                                </label>
                                <div class="form-group">
                                    <input id="txtTelefono" class="form-control" type="text" placeholder="Teléfono"/>

                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label>
                                    <i></i>
                                    Celular
                                </label>
                                <div class="form-group">
                                    <input id="txtCelular" class="form-control" type="text" placeholder="Celular"/>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label>
                                    <i></i>
                                    Página Web
                                </label>
                                <div class="form-group">
                                    <input id="txtPaginWeb" class="form-control" type="text" placeholder="Página Web"/>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label>
                                    <i></i>
                                    Email
                                </label>
                                <div class="form-group">
                                    <input id="txtEmail" class="form-control" type="text" placeholder="Email"/>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="subtitulo-texto">
                                    Usuario y Password SOL - SUNAT
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label class="lbl-titulo ">
                                    <i></i>
                                    Usuario Sol
                                </label>
                                <div class="form-group">
                                    <input id="txtUsuarioSol" class="form-control" type="text" placeholder="Usuario Sol"/>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label class="lbl-titulo ">
                                    <i></i>
                                    Contraseña Sol
                                </label>
                                <div class="form-group">
                                    <input id="txtClaveSol" class="form-control" type="password" placeholder="Password SOL"/>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                Certificado Electrónico y Password
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label>Seleccionar Archivo</label>
                                    <div class="input-group">
                                        <input class="form-control form-control-lg" type="file" id="fileCertificado" style={{display: 'none'}}/>
                                        <label class="form-control" for="fileCertificado" id="lblNameCertificado">../resources/20191899963.p12</label>
                                        <div class="input-group-btn">
                                            <label class="btn btn-success" for="fileCertificado">Subir</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label class="lbl-titulo ">
                                    <i></i>
                                    Contraseña de tu Certificado
                                </label>
                                <div class="form-group">
                                    <input id="txtClaveCertificado" class="form-control" type="password" placeholder="Contraseña de tu Certificado"/>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <button id="btnGuardar" class="btn btn-primary" type="button">
                                    <i class="fa fa-save"></i> Guardar Información
                                </button>
                            </div>
                        </div>
                    </section>
                    </section>
    )
}

export default Empresa;