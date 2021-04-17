<?php

/*=====================================================================
Requiremos los Archivos  que nos permiten instanciar una DB y  
El Modelo Consulta
========================================================================*/

require_once  __DIR__ ."\db\conection.php";
require_once  __DIR__ ."\models\Consulta.php";


/*=====================================================================
Devuelve  la consulta de la primer call
========================================================================*/

if(isset($_POST['idBase'])){
 
    $consulta =  Consulta::consultarBase($_POST['idBase']);
    //Retorna una respuesta del modelo en forma de json
    echo json_encode( $consulta );
}

 /*=====================================================================
          Devuelve  la consulta del segundo call
========================================================================*/

if(isset($_POST['fecha'])){

    // die(json_encode($_POST));

    $serverName = $_POST['serverName'];
    $database = $_POST['database'];
    $uid = $_POST['uid'];
    $pwd = $_POST['pwd'];
    $id = $_POST['id'];
    $serie = $_POST['serie'];
    $num = $_POST['num'];
    $fecha = $_POST['fecha'];
    $monto = $_POST['monto'];


 
    $consulta =  Consulta::consultarBaseDos($serverName, $database,  $uid, $pwd, $id, $serie, $num, $fecha, $monto );
    //Retorna una respuesta del modelo en forma de json
    echo json_encode( $consulta );
 }

 /*=====================================================================
          Devuelve  la consulta del tercer call el Cual trae un PDF
========================================================================*/

if(isset($_POST['pdf'])){

    $serverName = $_POST['serverName'];
    $database = $_POST['database'];
    $uid = $_POST['uid'];
    $pwd = $_POST['pwd'];
    $id = $_POST['id'];
    $serie = $_POST['serie'];
    $num = $_POST['num'];

   

 
    $consulta =  Consulta::consultarBaseTres($serverName, $database,  $uid, $pwd, $id, $serie, $num );
    //Retorna una respuesta del modelo en forma de json
    echo json_encode( $consulta );

}



 /*=====================================================================
          Devuelve  la consulta del tercer call  el cual trae un XML
========================================================================*/

if(isset($_POST['xml'])){

    $serverName = $_POST['serverName'];
    $database = $_POST['database'];
    $uid = $_POST['uid'];
    $pwd = $_POST['pwd'];
    $id = $_POST['id'];
    $serie = $_POST['serie'];
    $num = $_POST['num'];

 
    $consulta =  Consulta::consultarBaseTres($serverName, $database,  $uid, $pwd, $id, $serie, $num );
    //Retorna una respuesta del modelo en forma de json
    echo json_encode( $consulta );

}


 /*=====================================================================
          Devuelve  la consulta del tercer call  el cual trae un CDR
========================================================================*/

if(isset($_POST['cdr'])){

    $serverName = $_POST['serverName'];
    $database = $_POST['database'];
    $uid = $_POST['uid'];
    $pwd = $_POST['pwd'];
    $id = $_POST['id'];
    $serie = $_POST['serie'];
    $num = $_POST['num'];

 
    $consulta =  Consulta::consultarBaseTres($serverName, $database,  $uid, $pwd, $id, $serie, $num );
    //Retorna una respuesta del modelo en forma de json
    echo json_encode( $consulta );

}