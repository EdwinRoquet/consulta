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
            e.preventDefault();
               //validar que en el input haya  un dato

               let id = document.querySelector('#idDocumento').value;
               let serie = document.querySelector('#serie').value;
               let num = document.querySelector('#numero').value;
               let fecha = document.querySelector('#fecha').value;
               let monto = document.querySelector('#monto').value;
               let ruc = document.querySelector('#cliente').value;
            if (!ruc == ''&& !id == ''&& !serie == ''&& !num  == ''&& !fecha == '' && !monto == '') {
                             
                   // Crear llamado ajax
                   const xhr = new XMLHttpRequest();
                    // enviar datos por formdata
                   let idBase = document.querySelector('#cliente').value;
                   const data = new FormData();
                   data.append('idBase', idBase);
                   // Abrir la conexion
                   xhr.open('POST', 'respuesta.php', true);
                   
                   // En la carga
                   xhr.onload = function() {
                       if(this.status === 200) {
                           // obtener datos de la respuesta
                           let respuesta = JSON.parse(xhr.responseText);
                           if (respuesta.status == 'error') {
                            swal({
                                type: 'error',
                                title: 'Error!',
                                text: 'No hay información con los datos solicitados'
                              })
                           } else {
                            enviarSegundaConsulta(respuesta,e);   
                           }
                                    
                       }
                   }                 
                   // Enviar el Request
                   xhr.send(data);
                }else{

                swal({
                    type: 'error',
                    title: 'Error!',
                    text: 'Todos los campos deben estar llenos'
                  })

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
         // Abrir la conexion
         xhr.open('POST', 'respuesta.php', true);
         
         // En la carga
         xhr.onload = function() {
             if(this.status === 200) {

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
         // Abrir la conexion
         xhr.open('POST', 'respuesta.php', true);
         
         // En la carga
         xhr.onload = function() {
             if(this.status === 200) {
                 // obtener datos de la respuesta

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










      function  enviarSegundaConsulta( respuesta, e)  {
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
                    swal({
                        type: 'success',
                        title: 'Hay datos con los archivos seleccionados',
                        text: 'Seleccione el boton correspondiente'
                      });
         

               }else{
                   swal({
                    type: 'error',
                    title: 'Error!',
                    text: 'No hay archivos con los datos solicitados'
                  })
               }
                                            
             }
         }                 
         // Enviar el Request
         xhr.send(data);
    }


    function  enviarTerceraConsulta( respuesta){
        
    }

  











});