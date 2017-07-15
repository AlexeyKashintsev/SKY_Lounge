
<?php
 if ($_SERVER['REQUEST_METHOD'] == 'POST') 
    { 
    $file=fopen('E:\Altsoft\ASAFA1\paid.txt','a+');
     fwrite($file,'id: ');
     fputs($file,$_POST['id']."\r\n");                           
     fwrite($file,'№ Квитанции: ');
     fputs($file,$_POST['number']."\r\n"."\r\n");
 }
    echo "Благодарим за оплату, ожидайте подтверждения по e-mail.";
 ?>
