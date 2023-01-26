import React from 'react'
import './Cobros.css';

const Cobros = () => {
    return (
        <div>
         <div class="row"> 
         <div class="row">
         <div class="col-md-8">                      
         <div class="panel panel-primary">
         <div class="panel-heading">
          <h5 class="no-margin"> Generar cobro</h5>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="btn-group" role="group">
                                                    <button id="btnIngenieros" type="button" class="btn btn-primary" data-toggle="modal">
                                                        <i class="fa fa-group"></i> Ingenieros
                                                    </button>
                                                    <button id="btnColegitura" type="button" class="btn btn-default" data-toggle="modal">
                                                        <i class="fa fa-plus"></i> Colegiatura
                                                    </button>
                                                    <button id="btnCuotas" type="button" class="btn btn-default" data-toggle="modal">
                                                        <i class="fa fa-plus"></i> Cuotas
                                                    </button>
                                                    <div class="btn-group" role="group">
                                                        <button id="btnCertificado" type="button" class="btn btn-default dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa fa-plus"></i> Certificado <span class="caret"></span>
                                                        </button>
                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                            <li><button id="btnCertHabilidad" type="button" class="btn btn-default">Certificado de Habilidad(A)</button></li>
                                                            <li><button id="btnCertResidenciaObra" type="button" class="btn btn-default">Certificado de Residencia de Obra(B)</button></li>
                                                            <li><button id="btnCertProyecto" type="button" class="btn btn-default">Certificado de Proyecto(C)</button></li>
                                                        </ul>
                                                    </div>
                                                    <button id="btnPeritaje" type="button" class="btn btn-default" data-toggle="modal">
                                                        <i class="fa fa-plus"></i> Peritaje
                                                    </button>
                                                    <button id="btnOtro" type="button" class="btn btn-default" data-toggle="modal">
                                                        <i class="fa fa-plus"></i> Otros
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <table class="table">
                                                    <thead style={{backgroundcolor:' #FDB2B1',color: '#B72928'}}>
                                                        <tr class="table-danger">
                                                        <th width="5%">#</th>
                                                        <th width="15%">Cantidad</th>
                                                        <th width="15%">Concepto</th>
                                                        <th width="15%">Precio</th> 
                                                        <th width="15%">Monto</th>
                                                        <th width="10%">Quitar</th>
                                                    </tr></thead>
                                                    <tbody id="tbIngresos">

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        

                        
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <h5 class="no-margin"> Historial de cobro</h5>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <button class="btn btn-danger" id="btnIzquierdaHistorial">
                                                        <i class="fa fa-toggle-left"></i>
                                                    </button>
                                                    <span id="lblPaginaActualHistorial" class="font-weight-bold margin">0</span>
                                                    <span class="margin">a</span>
                                                    <span id="lblPaginSiguienteHistorial" class="font-weight-bold margin">0</span>
                                                    <button class="btn btn-danger" id="btnDerechaHistorial">
                                                        <i class="fa fa-toggle-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="table-responsive">
                                                    <table class="table table-striped table-hover" style={{borderwidth: '1px', borderstyle: 'dashed', borderlcolor:' #E31E25'}}>
                                                        <thead style={{backgroundcolor: '#FDB2B1',color: '#B72928'}}>
                                                            <tr class="table-danger">
                                                            <th style={{textalign:'center;'}} width="5%">#</th>
                                                            <th style={{textalign:'center;'}} width="10%">Recibo</th>
                                                            <th style={{textalign:'center;'}} width="15%">Fecha de Cobro</th>
                                                            <th style={{textalign:'center;'}} width="25%">Concepto</th>
                                                            <th style={{textalign:'center;'}} width="15%">Monto</th>
                                                            <th style={{textalign:'center;'}} width="30%">Observacion</th>
                                                            <th style={{textalign:'center;'}} width="10%">Detalle</th>
                                                        </tr></thead>
                                                        <tbody id="tbHistorial">
                                                            <tr class="text-center">
                                                                <td colspan="7">
                                                                    <p>No se ha seleccionado ningún ingeniero.</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <h5 class="no-margin">Afiliaciones</h5>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group" style={{float:' Right'}}>
                                                    <button class="btn btn-success" id="addAfiliacion">
                                                        <i class="fa fa-plus"></i> Añadir
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="table-responsive">
                                                    <table class="table table-striped table-hover" style={{borderwidth:' 1px',borderstyle:'dashed',bordercolor:' #E31E25'}}>
                                                        <thead style={{backgroundcolor:' #FDB2B1',color: '#B72928'}}>
                                                            <tr class="table-danger">
                                                                <th style={{textalign: 'center'}} width="10%">#</th>
                                                                <th style={{textalign: 'center'}} width="10%">Accion</th>
                                                                <th style={{textalign: 'center'}} width="25%">Concepto</th>
                                                                <th style={{textalign: 'center'}} width="15%">Monto</th>
                                                                <th style={{textalign: 'center'}} width="15%">Fecha</th>
                                                                <th style={{textalign: 'center'}} width="10%">Estado</th>
                                                                <th style={{textalign: 'center'}} width="15%">Usuario</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tbAfiliacion">
                                                            <tr class="text-center">
                                                                <td colspan="7">
                                                                    <p>No se ha seleccionado ningún ingeniero</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                          
                            <div class="col-md-4">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <h5 class="no-margin">Detalle del Cobro</h5>
                                    </div>

                                    <div class="panel-body">

                                        <div class="row">
                                                 <div class="col-md-12">
                                                <button id="btnCobrar" class="btn btn-success btn-block">
                                                    <div class="col-md-6 text-left">
                                                        <h4>COBRAR</h4>
                                                    </div>
                                                    <div class="col-md-6 text-right">
                                                        <h4 id="lblSumaTotal">0.00</h4>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                         <div class="row">
                                         <div class="col-md-12 col-sm-12 col-xs-12">
                                                <h5>Empresa a Facturar</h5>
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <div class="input-group-btn">
                                                            <button type="button" id="btnAddEmpresa" class="btn btn-primary btn-flat">Nuevo</button>
                                                        </div>
                                                        <select class="form-control select2 select2-hidden-accessible" id="cbEmpresa" style={{width:'100%'}} tabindex="-1" aria-hidden="true"><option value="">- Seleccione Empresa -</option><option value="3152">Estefania Jurado Pareja</option><option value="3151">Hector kenyo montero tovar</option><option value="3150">MENDOZA ZUÑIGA YANIRA</option><option value="3149">Hector kenyo montero tovar</option><option value="3148">BELLO PALACIOS HARRY DAVID</option><option value="3147">JMH ENERGY SAC</option><option value="3146">Elida Malpartida Untiveros</option><option value="3145">GIRASOL E.I.R.L</option><option value="3144">CONSULTORIA E INGENIERIA CHANGARAY EMPRESA INDIVIDUAL DE RESPONSABILIDAD LIMITADA</option><option value="3143">CONSORCIO BKS</option><option value="3142">Joyce David Sedano Mendoza</option><option value="3141">Edward Ramiro Villaverde Verastegui</option><option value="3140">Katerin</option><option value="3139">Eliazar</option><option value="3138">JAVIER MATOS AMBROSIO</option><option value="3137">Elena Miranda Ayala</option><option value="3136">CONSORCIO SUPERVISOR PUENTE COMUNEROS</option><option value="3135">VENTURA QUINTERO ALCIDES</option><option value="3134">Carlos maximo malpica ramos</option><option value="3133">CONSORCIO BELFI-COSAPI PERU</option><option value="3132">FERREYROS SOCIEDAD ANÓNIMA</option><option value="3131">WANKAVEA E.I.R.L.</option><option value="3130">Adan Teodoro Salazar Vasquez</option><option value="3129">INDUSTRIAS ANCALAYO S.A.C.</option><option value="3128">BRAYAM ALBERT IZARRA LÓPEZ</option><option value="3127">TELRAD PERU S.A.</option><option value="3126">CUMBRA INGENIERIA S.A.</option><option value="3125">JOHN JAHNDY ENRIQUEZ TORRES</option><option value="3124">COLEGIO DE NUTRICIONISTAS DEL PERU C.N.</option><option value="3123">Flor Isabel Huayta Valero</option><option value="3122">CUMBRA PERÚ S.A.</option><option value="3121">Maricruz Esperanza Gálvez Gamarra</option><option value="3120">Rony alejandro camarena de la cruz</option><option value="3119">MODERNIZACION DE LA GESTION DE LOS RECURSOS HIDRICOS</option><option value="3118">ALHUA MOYA FRANKLIN GERSON</option><option value="3117">COLEGIO DE ECONOMISTAS DE JUNIN</option><option value="3116">CONSTRUCTORA Y CONSULTORA DE LA TORRE S.A.C.</option><option value="3115">CHUQUILLANQUI REYES REINER</option><option value="3114">CARLOS FERNANDEZ CASADO S.L. SUCURSAL DEL PERU</option><option value="3113">LIZARBE MAYHUA WALTER VICENTE</option><option value="3112">PATRIMONIO EN  FIDEICOMISO  D.S N°093-2002-EF INTERPROPERTIES PERU</option><option value="3111">MANTARI CAMARENA ALCIDES EDGAR</option><option value="3110">Brencorp</option><option value="3109">PLAN COPESCO NACIONAL</option><option value="3108">SUBTERRANEA DRILLING S.A.C.</option><option value="3107">CONSORCIO SALUD DEL CENTRO</option><option value="3106">REYNAGA TRILLO ABRAHAM ORLANDO</option><option value="3105">WSP PERU CONSULTORIA S.A.</option><option value="3104">C.A.H. CONTRATISTAS GENERALES S.A.</option><option value="3103">LAIME CORDOVA EDWIN ALBERTO</option><option value="3102">SALINAS ANAYA DAYANA CARMEN</option><option value="3101">BARJA Y VASQUEZ INGENIERIOS EJECUTORES DE SERVICIOS MULTIPLES INDUSTRIALES SOCIEDAD ANONIMA CERRADA</option><option value="3100">IESA S.A</option><option value="3099">MANTENIMIENTO E INGENIERIA INDUSTRIAL S.R.L. - MAININ S.R.L.</option><option value="3098">MAYHUA MATAMOROS DAVID</option><option value="3097">KANAY S.A.C.</option><option value="3096">NINANYA AGUAYO DAVID HEVER</option><option value="3095">TRANS. ZIRCÓN - SYAL E.I.R.L.</option><option value="3094">F Q V CONTRATISTAS Y SERVICIOS GENERALES SOCIEDAD ANONIMA CERRADA</option><option value="3093">OVERALL STRATEGY S.A.C</option><option value="3092">HYGEN CONSULTING E.I.R.L.</option><option value="3091">SOS SUPERVISORES ASESORES Y CONSULTORES SOCIEDAD ANONIMA CERRADA</option><option value="3090">BUSTAMANTE LAPA JIMMY LUIS</option><option value="3089">SEL CONSULTORES PERU SACS</option><option value="3088">DIRECCION DE PROYECTOS DE INGENIERIA S.A.C.</option><option value="3087">ORDOÑEZ CRUZ INGENIEROS SOCIEDAD ANONIMA CERRADA</option><option value="3086">CHINA RAILWAY TUNNEL GROUP C.O.LTDA.SUCURSAL PERU</option><option value="3085">SERVICIO E INGENIERIA ELCIME SOCIEDAD ANONIMA CERRADA</option><option value="3084">CAIRAMPOMA RODRIGUEZ GABRIEL OSIRIS</option><option value="3083">Guillermo Jesús Tintaya Flores</option><option value="3082">SUAL IMPORT EXPORT SERVICIOS GENERALES S.A.C.</option><option value="3081">OBRITEC SAC</option><option value="3080">Jhordy Jair Calderon Huanuco</option><option value="3079">ECOLOGIA Y TECNOLOGIA AMBIENTAL S.A.C</option><option value="3078">CONSTRUCTORA ARCADIA S.A.C.</option><option value="3077">Javier Sedano</option><option value="3076"> CONSORCIO REAL SAN FRANCISCO</option><option value="3075">SAVE THE CHILDREN INTERNATIONAL</option><option value="3074">CONSTRUCTORA KIRUNA EIRL</option><option value="3073">Jhairo Peter Mucha Paredes</option><option value="3072">SICOM PERU S.R.L.</option><option value="3071">CONSTRUCTORA CONSULTORA &amp; INMOBILIARIA JONIO-SAMZ SOCIEDAD ANONIMA CERRADA</option><option value="3070">ELECTRO INDUSTRIAL SOLUTIONS S.A</option><option value="3069">EARTH RESOURCES ENVIRONMENTAL TECHNOLOGIES  S.A.C</option><option value="3068">CONSORCIO SANTA FE</option><option value="3067">Pablo Enrique Sánchez García</option><option value="3066">20512481125 - COMPAÑIA ELECTRICA EL PLATANAL S.A.</option><option value="3065"> A&amp;M SC CONTRATISTAS GENERALES SOCIEDAD ANONIMA CERRADA</option><option value="3064">LEYVA LEYVA SHEYLA YAKILYN</option><option value="3063">CONGRESO DE LA REPUBLICA</option><option value="3062">EMPRESA JEVIL S.A.C.</option><option value="3061">AGUIRRE GUTIERREZ E.I.R.L.</option><option value="3060">JJC CONTRATISTAS GENERALES S.A.</option><option value="3059">Alex Alfredo Mendez Beatriz</option><option value="3058">Alfredo Junior's III Moreno Torpoco</option><option value="3057">Brayhan Ramos Enriquez</option><option value="3056">Cesar Rubén Lazo Ramos</option><option value="3055">Juan José Millán Barrientos</option><option value="3054">ESITIC E.I.R.L.</option><option value="3053">Carlos Alberto Zarate Avila</option><option value="3052">Jenrry Abel Fernández obaldo</option><option value="3051">TROPIC-X S.A.C.</option><option value="3050">INSTITUTO DE CONSULTORIA S.A.</option><option value="3049">CLASEM SAC</option><option value="3048">AVANZADA TECNOLOGIA Y SERVICIOS S.A.C</option><option value="3047">CONSORCIO SACYR - AJANI</option><option value="3046">BARRETO BERNARDO PEDRO</option><option value="3045">MAS ERRAZURIZ DEL PERU S.A.C.</option><option value="3044">GUTIERREZ GUERRERO MARLON CHRISTIAN</option><option value="3043">RCR CONSULTORES S.A.C. -  RCR S.A.C.</option><option value="3042">LOPESA INDUSTRIAL S.A.</option><option value="3041">GRUPO INGESER SOC.COM.RESP.LTDA.</option><option value="3040">SAIS TUPAC AMARU LTDA. N° 1</option><option value="3039">SOCIEDAD INMOBILIARIA LOS ANDENES S.A.C.</option><option value="3038">CARBAO S.A.C.</option><option value="3037">ALCOCER TAPARA LUIS MIGUEL</option><option value="3036">CONTRATISTAS GENERALES KER EMPRESA INDIVIDUAL DE RESPONSABILIDAD LIMITADA - CONGEKER E.I.R.L.</option><option value="3035">CONSORCIO BALSAPUERTO I</option><option value="3034">CEJAF CONSULTORES &amp; EJECUTORES S.A.C</option><option value="3033">HORIZONTE CONSULTORES S.R.L.</option><option value="3032">INGECEN SOCIEDAD ANONIMA CERRADA</option><option value="3031">ANC ENERGY CONSULTING &amp; SUPERVISION S.A.C.</option><option value="3030">CONSORCIO EJECUTOR UCAYALI</option><option value="3029">EDP PROYECTOS SAC</option><option value="3028">LINDE PERU S.R.L.</option><option value="3027">IDOM CONSULTING, ENGINEERING, ARCHITECTURE, S.A. SUCURSAL DEL PERU</option><option value="3026">HORTUS S A</option><option value="3025">OEM ELECTRIC POWER SYSTEM S.A.C.</option><option value="3024">VYT CONTRATISTAS SOCIEDAD ANONIMA CERRADA - VYT CONTRATISTAS S.A.C.</option><option value="3023">VARVELA CONTRATISTAS GENERALES EIRL</option><option value="3022">O &amp; T  ENERGY  S.R.L.</option><option value="3021">PROYECTOS DE INFRAESTRUCTURA DEL PERU S.A.C.</option><option value="3020">F&amp;D SERVICIOS GENERALES E.I.R.L.</option><option value="3019">HAUG S.A.</option><option value="2022">CONSEGESA S.A.</option><option value="2021">CONSORCIO SACHA</option><option value="2020">ALPAYANA S.A.</option><option value="2019">CONSORCIO SAN MIGUEL</option><option value="2018">MANAGE YOUR PROCESS S.A.C.</option><option value="2017">DIAR INGENIEROS S A</option><option value="2016">ENERGIA Y ORGANIZACION DE SISTEMAS S.A.</option><option value="2015">C.MEJIA CONTRATISTAS GENERALES S.A.C.</option><option value="2014">PROYECTOS Y CONSTRUCCIONES ORIENTAL E.I.R.L.</option><option value="2013">SOCIEDAD DE INGENIERIA CONSTRUCTIVA AMERICANA CONTRATISTAS GENERALES S.A.C</option><option value="2012">INGENIERIA Y SOLUCIONES TECNOLOGICAS S.A.C.</option><option value="2011">CONSORCIO VIAL MAY USHIN</option><option value="2010">INGA NINAHUANCA WELBRZICH DONAIRY</option><option value="1012">CONSORCIO SALUD PURUS</option><option value="1011">ZICSA CONTRATISTAS GENERALES S.A.</option><option value="1010"> MIRANDA INGENIEROS PROVEEDORES Y CONSULTORES E.I.R.L.</option><option value="1009">FOR HIGH ALTERNATING CURRENT SAC</option><option value="1008">STN PROJECT MANAGER S.A.C.</option><option value="1007">OROCOM SAC</option><option value="1006">PROCESADORA DE ALIMENTOS FALCONI S.A.C</option><option value="1005">QUICK RENT A CAR S.A.</option><option value="7">ENEL DISTRIBUCIÓN PERU S.A.A</option><option value="6">CIEEC EIRL</option><option value="5">SOLUCIONES EMPRESARIALES LUCIANO SRL</option><option value="4">CAC SOSTENIBLE VALLE UBIRIKI</option><option value="3">CGT COMPANY S.A.C.</option><option value="2">VICENTE LUIS MAGRO RIVERA</option><option value="1">SOMOS PERU</option></select><span class="select2 select2-container select2-container--default select2-container--focus" dir="ltr" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-cbEmpresa-container"><span class="select2-selection__rendered" id="select2-cbEmpresa-container" title="- Seleccione Empresa -">- Seleccione Empresa -</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 text-left no-margin">
                                                <h5>Comprobante</h5>
                                                <select class="form-control" id="cbComprobante"><option value="">- Seleccione -</option><option value="1">BOLETA (B001)</option><option value="2">FACTURA (F001)</option><option value="7">FACTURA F2 (F002)</option><option value="8">FACTURA (F003)</option></select>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12 text-left">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <h5>N° Cip</h5>
                                                        <h5 id="lblCipSeleccionado">--</h5>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h5>Tipo</h5>
                                                        <h5 id="lblTipoIngenieroSeleccionado">--</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 text-left">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <h5>Ultimo Pago</h5>
                                                        <h5 class="text-primary description-header" id="lblUltimoPago">--</h5>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h5>Hábil Hasta</h5>
                                                        <h5 class="text-primary description-header" id="lblHabilHasta">--</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 text-left">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <h5>Capitulo</h5>
                                                        <h5 id="lblCapitulo">--</h5>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h5>Especialidad</h5>
                                                        <h5 id="lblEspecialidad">--</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 text-left">
                                                <h5>N° Documento</h5>
                                                <h5 id="lblDocumentSeleccionado">--</h5>
                                            </div>
                                            <div class="col-md-12 text-left">
                                                <h5>Ingeniero</h5>
                                                <h4 id="lblDatosSeleccionado">--</h4>
                                            </div>

                                            <div class="col-md-12 text-left">
                                                <h5>Fecha Colegiatura</h5>
                                                <h5 id="lblFechaColegiatura">--</h5>
                                            </div>

                                            <div class="col-md-12 ">
                                                <div class="clearfix">
                                                    <span class="pull-left" id="lblYears">0 AÑOS PARA VITALICO</span>
                                                    <span class="pull-right"></span>
                                                </div>
                                                <div class="progress xs">
                                                    <div class="progress-bar" style={{width: '0%'}} id="lblProgress"></div>
                                                </div>
                                                
                                         
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                         </div>
                         <footer class="main-footer">
    <div class="pull-right hidden-xs">
        <b>Versión</b> 1.0.1
    </div>
    <strong>Copyright © 2023 <a class="text-primary" href="http://www.cip-junin.org.pe/" target="_blank">Colegio de Ingenieros del Perú - CD Junín.</a> </strong> Todos los derechos reservados.
</footer> 
</div>
       
    )
}

export default Cobros