<?php
/*=====================================================================
          requiremos el controlador y instanciamos para devolver ka vista
========================================================================*/

require_once  __DIR__ ."/controllers/VistaController.php";



$plantilla = new ControladorPlantilla();
$plantilla -> ctrPlantilla();



// 01','F001','00000001','2019-09-04',354.00 10427489341