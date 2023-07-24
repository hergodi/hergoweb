//Constante del HOST a utilizar
//export const URL_HOST = "https://pru-pel22-wsdeceyecinter.ine.mx"
//export const URL_HOST_PARAM = "https://pru-pel22-wsdeceyecinter.ine.mx"
export const URL_HOST = "https://localhost:8443"
//export const URL_HOST = "https://deppp-wspruebas2022.ine.mx"
//export const URL_HOST = "https://capa-ine20-rssca-ws.ine.mx"
//export const URL_HOST = "https://seg-ine20-rssca-ws.ine.mx"
 //export const URL_HOST = "https://pru-pel22-wsdeceyecinter.ine.mx"
// export const URL_HOST = "https://capa-pel22-web.ine.mx"
export const URL_HOST_PARAM = "https://localhost:8443"
//export const URL_HOST_PARAM = "https://capa-pel22-wsdeceyecinter.ine.mx"


//LOCAL
 export const rutaListados="CC2aEtapaReporte/Listados/";     //Rutas Para Local
 export const rutaCedulas = `CC2aEtapaReporte/Cedulas/`;     //Rutas Para Local
 export const rutaCarpetaCorte = `CC2aEtapaReporte/Listados/20/carpetaCorte.json`;
// export const rutaListados="CC2aEtapaReporte/Listados/";     //Rutas Para Local
// export const rutaCedulas = `CC2aEtapaReporte/Cedulas/`;     //Rutas Para Local
// export const rutaCarpetaCorte = `CC2aEtapaReporte/Listados/20/carpetaCorte.json`;


//PRUEBAS
// export const rutaListados="../Listados/";     
//  export const rutaCedulas = `../Cedulas/`;     
//  export const rutaCarpetaCorte = `../Listados/20/carpetaCorte.json`;

//PRODUCCIÓN
// export const rutaCedulas="../../Cedulas/16/"   //Rutas Para Prod
// export const rutaListados="../../Listados/16/"  //Rutas Para Prod
// export const rutaCarpetaCorte ="../../Cedulas/16/carpetaCorte.json"

//Constantes para almacenar el token en el localStorage
export const ACCESS_TOKEN="xT";
export const INFO_MENU = "yI";
export const ID_PROCESO="aV"
export const ID_DETALLE="aD"
export const ID_ESTADO="yW"; 
export const ID_DISTRITO="aP";
export const N_PROCESO="sR";
export const N_ESTADO="Lq";
export const N_DISTRITO="sI";
export const L_PROCESOS="xP"
export const L_ESTADOS="qP"
export const L_DISTRITOS="lL"
export const D_USUARIO="wA"
export const ROL_USAURIO="rU";
export const ACCESO_MENU="aM";

//Constantes que contienen información del sistema
export const ID_SISTEMA = 4;
export const VERSION_SISTEMA_TEXTO = "Admin"
export const VERSION_SISTEMA = "v 1.0";
export const FECHA_FINAL = "29/11/2021 15:00 Hrs";
export const V_LIBERACION = "V0.1 01/01/2022";

///Configuracion 
export const FORMATO_FECHA = 'DD/MM/YYYY';
export const FORMATO_HORA = 'HH:mm'

//Constantes de Proceso Electoral y Detalle Proceso actual
export const id_Proceso_Electoral = '16';
export const id_Detalle_Proceso = '108';
export const id_Etapa_Capacitacion = 2;
export const parametroVotoExtranjeo = 20;

//Id categoria
export const idCategoria_AvanceNomCapa = 6;
export const idCategoria_Sustituciones = 7;
export const idCategoria_UsoCapturaElecMovil = 8;
export const idCategoria_CapVirtual = 9;
export const idCategoria_Calidad = 10;
export const idCategoria_Simulacros = 11;
export const idCategoria_AtencionSanitaria = 12;
export const idCategoria_AtencionSanitariaPEC = 13;

//Rubro Verificaciones
export const rubro_Sustituciones = 'S';
export const rubro_NombraCapa = 'A';
export const rubro_Capacitacion = 'C';
export const rubro_Elect = 'C';
export const rubro_Sim_Pra = 'P';

//Id rubro y TIpo Razon
export const idRubro_Sustitucion = 9;
export const tipoRazon_Sustitucion = 'S';
export const idRubro_Impedimento = 7;
export const tipoRazon_Impedimento = 'I';
export const idRubro_Rechazo = 8;
export const tipoRazon_Rechazo = 'R';
export const idRubro_Notificacion = 2;
export const tipoRazon_Notificacion = 'N';
export const idRubro_Capacitacion = 1;
export const tipoRazon_Capacitacion = 'C';
export const tipoRazon_Avance = 'A';

export const tipoRazon_porcenNomMovil = 'N';
export const tipoRazon_porcenCapMovil = 'C';
export const tipoRazon_porcenUso = 'T';

export const idRubro_porcenNomMovil = 2;
export const idRubro_porcenCapMovil = 1;
export const idRubro_porcenUso = 4;

/*Titulos Dashboard*/
export const sustitucionFuncionarios = "Sustituciones de las y los Funcionarios de Mesas Directivas de Casilla."
export const usoCaptura = "Uso y captura de información a través del ELEC Móvil."

/*Descripcion Tabla Dashboard*/
export const descripcionNomCapa = "Verificar el avance en la entrega de Nombramientos y la impartición de la Capacitación electoral al 100% de los distritos electorales de la entidad, identificando el 10% de las ARE con menor porcentaje en la entrega de Nombramientos y 10% de las ARE con menor porcentaje en la impartición de la capacitación electoral."
export const descripSustFuncionarios = "Verificar las sustituciones de las y los FMDC en el 100% de los distritos electorales de la entidad, identificando los distritos más altos y en cada uno ellos seleccionar el 5% de las ARE con mayor porcentaje de sustituciones de FMDC.";
export const descripcionUsoCaptura = "Control y verificación del Uso y Captura de información a través del ELEC Móvil durante la entrega de los Nombramientos y la Capacitación electoral a las y los FMDC en el 100% de los distritos electorales de la entidad; localizando los distritos con mejor uso y captura a través de los dispositivos móviles, en cada uno de ellos seleccionara el 10% de ARE con los porcentajes más bajos."                      

/*Titulos para tabla consulta*/
export const nomCapaConsulta = "Control de calidad en gabinete del avance en la entrega de nombramientos y capacitación en 2a etapa"
export const sustFuncionariosConsulta = "Control de calidad en gabinete de las sustituciones de funcionarios de casilla"
export const usoCapturaConsulta = "Control de calidad en gabiente del uso y captura del ELEC móvil en 2a etapa"
export const capacitacionVirtualConsulta = "Control de calidad en gabinete de la capacitación virtual a funcionarios de casilla"

export const nomCapaConsultaCampo = "Control de calidad en campo del avance en la entrega de nombramientos y capacitación en 2a etapa"
export const sustFuncionariosCampo = "Control de Calidad en campo de las Sustituciones de las y los Funcionarios de Mesas Directivas de Casilla"
export const calidadCapacitacionConsulta = "Control de calidad en campo de la calidad de la Capacitación a funcionarias/os de casilla"
export const verifSimulacros = "Control de calidad en campo de los Simulacros y/o prácticas de la Jornada Electoral"
export const tablaQuestSimulacros = "Responda si cada uno de los aspectos a verificar de la actividad de control de calidad que se cumplieron;\n en caso de ser necesario especifique en el apartado de observaciones algún aspecto a verificar"

/*-Rutas SED-*/
export const rutaCapturaAprobacionListados      = "/aprobacionListados";
export const rutaConsultaAprobacionListados     = "/consultaAprobacionListados";
export const rutaCapturaRevisionObservaciones   = "/capturaRevisionObservaciones";
export const rutaConsultaRevisionObservaciones  = "/consultaRevisionObservaciones";

/*-Titulos SED-*/
export const aprobListadoJD         = "Aprobación del listado por la Junta Distrital"
export const aprobListadoCD         = "Aprobación del listado por el Consejo Distrital"
export const revisionObservaciones  = "Revisión de observaciones"

/*MENSAJES DE TOOLTIPS*/
export const tooltipOPLControl = "Número de consejeros del OPL que acompañaron el Control de Calidad. Registrar números naturales"
export const tooltipOtraFiguraControl = "Número de otras figuras que acompañaron el Control de Calidad. Registrar números naturales"
export const tooltipRPPControl = "Número de partidos y/o candidaturas independientes nacionales que acompañaron el Control de Calidad. Registrar números naturales."
export const tooltipLocalesControl = "Número de partidos y/o candidaturas independientes locales que acompañaron el Control de Calidad. Registrar números naturales."

/*MENSAJES DE ADVERTENCIA*/
export const msj_Exito = "La información se ha guardado con éxito"
export const msj_Eliminar = "Se borrará toda la información capturada de las ARE ¿Desea continuar?"
export const msj_Salir_Pierde_Inf = "La información capturada se perderá ¿Deseas continuar?"
export const msj_Eliminar_Campo = "¿Estás seguro(a) de eliminar el registro seleccionado?"

export const msj_SinDatos_Campo = "No existen controles de calidad en gabinete previos para mostrar información."
export const msj_SinSecciones_Aprobacion = "No hay secciones por aprobar."
export const msj_SinArchivos = "No se puede guardar la aprobación del listado. Favor de cargar los documentos de soporte requeridos."

/*MENSAJES DE ERROR */
export const gral_error_ocurrioError= "Ocurrió un error al consultar "
export const gral_error_descargaError= "Ocurrió un error al descargar el soporte documental."
export const gral_error_obetenerVerificaciones= "Ocurrió un error al consultar las verificaciones"

export const gral_error_guardarVerificacion = "Ocurrió un error al guardar la verificación."
export const gral_error_guardarVerificaciones= "Ocurrió un error al guardar las verificaciones"


//Colores de Semaforo Epidemiologico
export const semaforo = [
    {valueC: 32, colorSemaforo: "Rojo",     colorP: '#26ADB8'},
    {valueC: 33, colorSemaforo: "Naranja",  colorP: '#55D0DB'},
    {valueC: 34, colorSemaforo: "Amarillo", colorP: '#74D8E1'},
    {valueC: 35, colorSemaforo: "Verde",    colorP: '#8FDEE7'},
]

export const semaforoPEC = [
    {valueC: 36, colorSemaforo: "Rojo",     colorP: '#26ADB8'},
    {valueC: 37, colorSemaforo: "Naranja",  colorP: '#55D0DB'},
    {valueC: 38, colorSemaforo: "Amarillo", colorP: '#74D8E1'},
    {valueC: 39, colorSemaforo: "Verde",    colorP: '#8FDEE7'},
]

// export const rutaListados="CC2aEtapaReporte/Listados/16/";     //Rutas Para Local
// export const rutaCedulas = `CC2aEtapaReporte/Cedulas/16/`;     //Rutas Para Local



export const tituloModalAdvertencia = "No puede realizar esta acción";
export const cuerpoModalAdvertencia = "El registro solo puede ser modificado por el usuario que lo creó";
export const imagenIne = 'iconos/ineLogoMD.jpg';

/*ROLES CAPTURA*/
export const rolesCapturaAprobRevision = 
    ["SCE.ADMIN.OC","SCE.CAPTURA.OC","SCE.CAPTURA.JD","SCE.UNICOM.OC","SCE.CAPTURA_VCEYEC.JD"];

/*ROLES CONSULTA*/
export const rolesConsulta = 
            ["ELECINE.CONSULTA.OC", "ELECINE.CONSULTA_RESTRINGIDA.OC", "ELECINE.CONSULTA_EXT.REST.OC", "ELECINE.CAU.OC",
             "ELECINE.CONSULTA.JL", "ELECINE.CONSULTA_RESTRINGIDA.JL", "ELECINE.CONSULTA_EXT.REST.JL", "ELECINE.CONSULTA_EXT.OPL.JL", 
             "ELECINE.CONSULTA.JD", "ELECINE.CONSULTA_RESTRINGIDA.JD", "ELECINE.CONSULTA_EXT.REST.JD", "ELECINE.CONSULTA_EXT.OPL.JD" ];
export const rolesTablaConsulta = 
            ["ELECINE.CONSULTA.OC", "ELECINE.CONSULTA_RESTRINGIDA.OC", "ELECINE.CONSULTA_EXT.REST.OC", 
             "ELECINE.CONSULTA.JL", "ELECINE.CONSULTA_RESTRINGIDA.JL", "ELECINE.CONSULTA_EXT.REST.JL", "ELECINE.CONSULTA_EXT.OPL.JL", 
             "ELECINE.CONSULTA.JD", "ELECINE.CONSULTA_RESTRINGIDA.JD", "ELECINE.CONSULTA_EXT.REST.JD", "ELECINE.CONSULTA_EXT.OPL.JD" ];


