<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- main CSS -->
    <link rel="stylesheet" href="./css/main.css">
    <title>GO</title>
</head>
<body>
<?php
   
   // ----------------------------- DATOS DE SMTP Y CUENTA DE ENV�O -------------------------------
   
     // primero hay que incluir la clase phpmailer para poder instanciar
     //un objeto de la misma
     require ("../phpmailer/class.phpmailer.php");
     require ("../phpmailer/class.smtp.php");
   
     //instanciamos un objeto de la clase phpmailer al que llamamos 
     //por ejemplo mail
     $mail=new phpmailer();
   
     //Definimos las propiedades y llamamos a los m�todos 
     //correspondientes del objeto mail
   
     //Con PluginDir le indicamos a la clase phpmailer donde se 
     //encuentra la clase smtp que como he comentado al principio de 
     //este ejemplo va a estar en el subdirectorio includes
     $mail->PluginDir = "phpmailer/";
   
     //Con la propiedad Mailer le indicamos que vamos a usar un 
     //servidor smtp
     $mail->Mailer = "smtp";
   
     //Asignamos a Host el nombre de nuestro servidor smtp
     $mail->Host = "mail.goittodo.com";
   
     //Le indicamos que el servidor smtp requiere autenticaci�n
     $mail->SMTPAuth = true;
   
     //Le decimos cual es nuestro nombre de usuario y password
     $mail->Username = "jpgrover@goittodo.com"; 
     $mail->Password = "jp25gp84jp26";
   
     //Indicamos cual es nuestra direcci�n de correo y el nombre que 
     //queremos que vea el usuario que lee nuestro correo
     $mail->From = "jpgrover@goittodo.com";
     $mail->FromName = "Inversiones GO!";
   
     //el valor por defecto 10 de Timeout es un poco escaso dado que voy a usar 
     //una cuenta gratuita, por tanto lo pongo a 30  
     $mail->Timeout=30;
   
   // ----------------------------- DATOS DEL MENSAJE -------------------------------
   
     //Indicamos cual es la direcci�n de destino del correo
     $mail->AddAddress($_POST['mail'], $_POST['nombre']);
   
     //Asignamos asunto y cuerpo del mensaje
     //El cuerpo del mensaje lo ponemos en formato html, haciendo 
     //que se vea en negrita
     $mail->Subject = "Consulta desde landypage";
     $mail->Body = "Escribio ".$_POST['nombre'].".<br> Su mail es: ". $_POST['mail'].".<br> Su telefono es:".$_POST['phone'].".<br> El mensaje que dejo es: ".$_POST['mensaje']."<br> Fin.- ";
   
     //Definimos AltBody por si el destinatario del correo no admite email con formato html 
     $mail->AltBody = "Hola". $_POST['nombre'];
     
     //Decimos que el email va a ser tipo HTML
     $mail->IsHTML(true); 
   
    // ------------------------- DATOS DEL FICHERO ----------------------------------
   
   
     //se envia el mensaje, si no ha habido problemas 
     //la variable $exito tendra el valor true
   
     if ($mail->Send()) {
       echo "Envio correcto gracia, contestaremos lo mas rapido que podamos Gracias ";
     }else {
       echo "Error".$mail->ErrorInfo;  // La propiedad errorinfo contiene el error
     }
      
   ?>
    <header>
    <div class="row">
                <div class="col-lg-6 text-center">
                  <br><br><br>
                <span> Te damos la Gracias por contactarnos </span><br>
                <span>
                  <?php
                    if ($mail->Send()) {
                      echo "Envio correcto gracia, contestaremos lo mas rapido que podamos Gracias ";
                    }else {
                      echo "Error".$mail->ErrorInfo;  // La propiedad errorinfo contiene el error
                    }
                  ?>
                </span><br><br><br><br><br>
                <img src="./media/logo_negro 1.png" alt="logo-go" class="logo">
                <br><br>
                </div>
                <div class="col-lg-6 imagenes desktop">
                  <div class="card first">
                    <img src="./media/laptop-min.png" alt="icono-laptop">
                    <div class="card-title">
                      Confeccionamos
                    </div>
                    <div class="card-text">
                      Sitios webb, app y software a medida
                    </div>
                  </div>
                    <img src="./media/Code_perspective_matte_s 1.png" alt="icono-code" class="code">
                    <img src="./media/nave.png" alt="icono-nave" class="nave">
                    <div class="card second">
                      <img src="./media/plane-min.png" alt="logo-avion">
                      <div class="card-title">
                        Asesoría
                      </div>
                      <div class="card-text">
                        Turismo y viajes
                      </div>
                    </div>
                    <img src="./media/Laptop_perspective_matte_s 1.png" alt="icono-laptop" class="laptop">
                    <div class="card third">

                      <img src="./media/market-min.png" alt="logo-market">
                      <div class="card-title">
                        Creación
                      </div>
                      <div class="card-text">
                        Marketplace y sitios de venta
                      </div>
                    </div>
                    <img src="./media/Fire_perspective_matte_s 1.png" alt="icono-fire" class="fire">
                </div>
            </div>
    </header>
    <br><br><br><br>
    <!-- header end -->

    <!-- footer start -->
    <footer class="text-center">
      <a href="index.html"><img src="./media/logo_blanco 1.png" alt="logo-go" ></a>
      <br>    
      <div class="footer text-center">
          <div class="icon"><a href="https://www.instagram.com/go_it_to_do/"><img src="./media/instagram.png" alt="instagram"></a></div>
          <div class="icon"><a href="https://www.facebook.com/InversionesGoSpA"><img src="./media/facebook.png" alt="facebook"></a></div>
          <div class="icon"><a href="mailto:eliane@goittodo.com"><img src="./media/email.png" alt="email"></a></div>
          <div class="icon"><a href="https://api.whatsapp.com/send?phone=56953725345"><img src="./media/whatsap.png" alt="whatsapp" class="wsp"></a></div>
      </div>
         <p>Desarrollado por <strong><a href="https://flipa.ar/">FLIPA</a></strong> - Todos los derechos reservados</p> 
    </footer>
    <!-- footer end -->


    <!-- js bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>