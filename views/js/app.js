//Espera a que cargue la vista
document.addEventListener('DOMContentLoaded', function () {

   
     /****************************************************************************
      *                                                                           
      *  Evento RUC                                                                      
      *                                                                           
      ****************************************************************************/


    
    //Inicializamos todos los eventos
    document.querySelector('.iniciarEventos').addEventListener('click', function (e) {

        //diparar evento Ruc Empleos
        if (e.target.classList.contains('eventoConsultar')) {
               //validar que en el input haya  un dato
            if (document.querySelector('#cliente').value ) {
                             
                   // Crear llamado ajax
                   const xhr = new XMLHttpRequest();
                    // enviar datos por formdata
                   let idBase = document.querySelector('#cliente').value;
                   const data = new FormData();
                   // data.append('idBase', '10427489341');
                   data.append('idBase', idBase);
                   // Abrir la conexion
                   xhr.open('POST', 'respuesta.php', true);
                   
                   // En la carga
                   xhr.onload = function() {
                       if(this.status === 200) {
                           // obtener datos de la respuesta
                           let respuesta = JSON.parse(xhr.responseText);
                        //  console.log(respuesta)
                         enviarSegundaConsulta(respuesta,e);               
                       }
                   }                 
                   // Enviar el Request
                   xhr.send(data);
                }else{
                alert('no hay algo campo cliente');

            }
      
        }

      /****************************************************************************
      *                                                                           
      *  Evento PDF                                                                 
      *                                                                           
      ****************************************************************************/
       if (e.target.classList.contains('btnPDf')) {

           let BaseDatos = document.querySelector('#datosCon').value;
           let respuesta = JSON.parse(BaseDatos);
           let id = document.querySelector('#idDocumento').value;
           let serie = document.querySelector('#serie').value;
           let num = document.querySelector('#numero').value;

           // Crear llamado ajax
        const xhr = new XMLHttpRequest();
        // enviar datos por formdata

         const data = new FormData();
         data.append('pdf', true);
         data.append('serverName',respuesta.serverName);
         data.append('database', respuesta.database);
         data.append('uid', respuesta.uid);
         data.append('pwd',  respuesta.pwd);
         data.append('id', id);
         data.append('serie', serie);
         data.append('num', num);
        //  data.append('id', respuesta.id);
        //  data.append('serie', respuesta.serie);
        //  data.append('num', respuesta.num);
         // Abrir la conexion
         xhr.open('POST', 'respuesta.php', true);
         
         // En la carga
         xhr.onload = function() {
             if(this.status === 200) {
                 // obtener datos de la respuesta
                //  var respuesta = JSON.parse(xhr.responseText);
            //    console.log( xhr.responseText);

               var respuesta = JSON.parse(xhr.responseText);
               console.log(respuesta)

              // The Base64 string of a simple PDF file
              var b64 = respuesta.pdf
              const linkSource = `data:application/pdf;base64,${b64}`;
              const downloadLink = document.createElement("a");
              const fileName = "reporte.pdf";
              downloadLink.href = linkSource;
              downloadLink.download = fileName;
              downloadLink.click()
                                            
             }
         }                 
         // Enviar el Request
         xhr.send(data);




       }
      /****************************************************************************
      *                                                                           
      *  Evento XML                                                               
      *                                                                           
      ****************************************************************************/
       if (e.target.classList.contains('btnXML')) {

        let BaseDatos = document.querySelector('#datosCon').value;
           let respuesta = JSON.parse(BaseDatos);
           let id = document.querySelector('#idDocumento').value;
           let serie = document.querySelector('#serie').value;
           let num = document.querySelector('#numero').value;

           // Crear llamado ajax
        const xhr = new XMLHttpRequest();
        // enviar datos por formdata

         const data = new FormData();
         data.append('xml', true);
         data.append('serverName',respuesta.serverName);
         data.append('database', respuesta.database);
         data.append('uid', respuesta.uid);
         data.append('pwd',  respuesta.pwd);
         data.append('id', id);
         data.append('serie', serie);
         data.append('num', num);
        //  data.append('id', respuesta.id);
        //  data.append('serie', respuesta.serie);
        //  data.append('num', respuesta.num);
         // Abrir la conexion
         xhr.open('POST', 'respuesta.php', true);
         
         // En la carga
         xhr.onload = function() {
             if(this.status === 200) {
                 // obtener datos de la respuesta
                //  var respuesta = JSON.parse(xhr.responseText);
            //    console.log( xhr.responseText);

               var respuesta = JSON.parse(xhr.responseText);
               console.log(respuesta)

              // The Base64 string of a simple PDF file
              var b64 = respuesta.xml
              const linkSource = `data:application/xml;base64,${b64}`;
              const downloadLink = document.createElement("a");
              const fileName = "reporte.xml";
              downloadLink.href = linkSource;
              downloadLink.download = fileName;
              downloadLink.click()
                                            
             }
         }                 
         // Enviar el Request
         xhr.send(data);



       }
      /****************************************************************************
      *                                                                           
      *  Evento CDR                                                               
      *                                                                           
      ****************************************************************************/
       if (e.target.classList.contains('btnCDR')) {

        let BaseDatos = document.querySelector('#datosCon').value;
        let respuesta = JSON.parse(BaseDatos);
        let id = document.querySelector('#idDocumento').value;
        let serie = document.querySelector('#serie').value;
        let num = document.querySelector('#numero').value;

        // Crear llamado ajax
     const xhr = new XMLHttpRequest();
     // enviar datos por formdata

      const data = new FormData();
      data.append('cdr', true);
      data.append('serverName',respuesta.serverName);
      data.append('database', respuesta.database);
      data.append('uid', respuesta.uid);
      data.append('pwd',  respuesta.pwd);
      data.append('id', id);
      data.append('serie', serie);
      data.append('num', num);
     //  data.append('id', respuesta.id);
     //  data.append('serie', respuesta.serie);
     //  data.append('num', respuesta.num);
      // Abrir la conexion
      xhr.open('POST', 'respuesta.php', true);
      
      // En la carga
      xhr.onload = function() {
          if(this.status === 200) {
              // obtener datos de la respuesta
             //  var respuesta = JSON.parse(xhr.responseText);
         //    console.log( xhr.responseText);

            var respuesta = JSON.parse(xhr.responseText);
            console.log(respuesta)

           // The Base64 string of a simple PDF file
           var b64 = respuesta.cdr
           const linkSource = `data:application/cdr;base64,${b64}`;
           const downloadLink = document.createElement("a");
           const fileName = "reporte.cdr";
           downloadLink.href = linkSource;
           downloadLink.download = fileName;
           downloadLink.click()
                                         
          }
      }                 
      // Enviar el Request
      xhr.send(data);

       }
       /****************************************************************************
      *                                                                           
      *  Evento Realiza una nueva busqueda                                                              
      *                                                                           
      ****************************************************************************/
        if (e.target.classList.contains('btnNewReload')) {
            // console.log('evento recargar');
           window.location.reload();
        }
        
    });










    function  enviarSegundaConsulta( respuesta, e){
        // Crear llamado ajax
        const xhr = new XMLHttpRequest();
        // enviar datos por formdata
        let id = document.querySelector('#idDocumento').value;
        let serie = document.querySelector('#serie').value;
        let num = document.querySelector('#numero').value;
        let fecha = document.querySelector('#fecha').value;
        let monto = document.querySelector('#monto').value;

         const data = new FormData();
         data.append('serverName',respuesta.serverName);
         data.append('database', respuesta.database);
         data.append('uid', respuesta.uid);
         data.append('pwd',  respuesta.pwd);
         data.append('id', id);
         data.append('serie', serie);
         data.append('num', num);
         data.append('fecha', fecha);
         data.append('monto', monto);

         //  data.append('id', '01');
         //  data.append('serie', 'F001');
         //  data.append('num', '00000001');
         //  data.append('fecha', '2021-03-25');
         //  data.append('monto', '150');
         // Abrir la conexion
         xhr.open('POST', 'respuesta.php', true);
         
         // En la carga
         xhr.onload = function() {
             if(this.status === 200) {
                 // obtener datos de la respuesta
                 var respuesta = JSON.parse(xhr.responseText);
               console.log( respuesta);
               if (respuesta.status == 1) {
                   document.querySelector('.btnDescarga').removeAttribute('disabled');
                   document.querySelector('.btnDescarga2').removeAttribute('disabled');
                   document.querySelector('.btnDescarga3').removeAttribute('disabled');

                   

                    document.querySelector('#datosCon').value = JSON.stringify(respuesta);
         

               }else{
                   alert('No hay archivos con los datos solicitados');
               }
                                            
             }
         }                 
         // Enviar el Request
         xhr.send(data);
    }


    function  enviarTerceraConsulta( respuesta){
        
    }

  











});