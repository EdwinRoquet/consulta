<?php

class Consulta
{

/*=====================================================================
          Metodo que ejecuta el primer call  : sp_empresa_conexion 
========================================================================*/

 static public function consultarBase($idBaseDatos)
 {
    // Credenciales para la conexion a SQL SERVER
    $args = [
    'serverName'=> 'tu server',
    'database'=> 'tu base',
    'uid'=> 'tu usuario',
    'pwd'=> 'tu contraseña',
    ];
    //Conexion a Bas de Datos
    $conexion = new Conection($args);
    $conn = $conexion->connect();
       
    $dato = $idBaseDatos;
    // Construcción del query
    $sql = "exec sp_empresa_conexion $dato";
    // Petición a la base de datos
    $result = sqlsrv_query( $conn, $sql );
   // Convertimos el resultado en un  array y lo guardamos en una variable
   while( $dataArray = sqlsrv_fetch_array( $result) ) {
   
   // Convertimos la respuesta de sql server a un array asociativo que rertorna una conexion
    return $data = [
         'serverName' => $dataArray['servidor'],
         'database' => $dataArray['base'],
         'uid' => $dataArray['usuario'],
         'pwd' => $dataArray['clave'],
      ];

      
}
   // Retornamos un arreglo asociativo como respuesta
    return $data;
 }
/*=====================================================================
          Metodo que ejecuta el segundo call exec sp_comprobante_buscar_web
========================================================================*/

static public function consultarBaseDos($serverName, $database, $uid, $pwd  ,$id, $serie, $num, $fecha, $monto)
 {
    // Credenciales para la conexion a SQL SERVER
    $args = [
    'serverName'=> $serverName,
    'database'=> $database,
    'uid'=> $uid,
    'pwd'=> $pwd,
    ];
   //Conexion a Bas de Datos
    $conexion2 = new Conection($args);
    $conn2 = $conexion2->connect();
    // Construcción del query
    $sql = " sp_comprobante_buscar_web '$id','$serie','$num','$fecha','$monto'";
    // Petición a la base de datos
    $result = sqlsrv_query( $conn2, $sql );
    
    // Convertimos el resultado en un  array y lo guardamos en una variable
   while( $dataArray = sqlsrv_fetch_array( $result) ) {
      // var_dump($dataArray);

   if ($dataArray['0'] == 1) {
      return $data = [
         'status' => $dataArray['0'],
         'serverName'=> $serverName,
         'database'=> $database,
         'uid'=> $uid,
         'pwd'=> $pwd,
         'id' => $id,
         'serie' => $serie,
         'num' => $num,
      ];

   }else{
      return $data = [
         'status' => $dataArray['0'],
      ];
      }
    
}
   // Retornamos un arreglo asociativo como respuesta
    return $data;
 }
    


/*=====================================================================
          Metodo que ejecuta el tecer call  sp_extraebyte_buscar
========================================================================*/
static public function consultarBaseTres($serverName, $database, $uid, $pwd  ,$id, $serie, $num)
 {
    // Credenciales para la conexion a SQL SERVER
    $args = [
    'serverName'=> $serverName,
    'database'=> $database,
    'uid'=> $uid,
    'pwd'=> $pwd,
    ];
      // Conexion a Base de Datos
     $conexion3 = new Conection($args);
     $conn3 = $conexion3->connect();
     // Construcción del query
    $sql = " sp_extraebyte_buscar '$id','$serie','$num'";
     // Petición a la base de datos
    $result = sqlsrv_query( $conn3, $sql );

    // Convertimos el resultado en un objeto y lo guardamos en una variable
    $archivo = sqlsrv_fetch_object( $result);
    // Convertimos la respuesta de sql server de binary a base64
    $data = [
      'pdf' =>  base64_encode ( $archivo->archivo_pdf ) ,
      'xml' =>  base64_encode ( $archivo->archivo_xml ) ,
      'cdr' =>  base64_encode ( $archivo->archivo_cdr ) ,
   ];
   // Retornamos un arreglo asociativo como respuesta
   return $data;
 }
    
}
