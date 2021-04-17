<?php
 /*=====================================================================
          Clase que nos permite instanciar multiples bases de dastos
========================================================================*/
  class Conection 
{
   //Declaramos las propiedades que recibe el objeto para conectarse a una db
   public $serverName;
   public $database;
   public $uid;
   public $pwd;
    //Constructor que recibe un array asociativo
   public function __construct($args = [])
   {
   $this->serverName = $args['serverName'];
   $this->database = $args['database'];
   $this->uid = $args['uid'];
   $this->pwd = $args['pwd']; 
   }

     /*=====================================================================
         Metodo que permite conectarnos a una base de datos SQL SERVER
      ========================================================================*/
    public  function connect( )
     {
        
        $connectionInfo = array("Database"=> $this->database, "UID"=> $this->uid, "PWD"=> $this->pwd);
        $conn = sqlsrv_connect( $this->serverName, $connectionInfo);
    
        if( $conn ) {
    
           
             return $conn;
        }else{
             echo "Conexión no se pudo establecer.<br>";
             die( print_r( sqlsrv_errors(), true));
        }
     }
    




}

