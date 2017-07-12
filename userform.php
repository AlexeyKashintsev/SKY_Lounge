<!DOTYPE html>
<html>
    <body>
    <meta charset="utf-8">
<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') 
    { 
    $file=fopen('E:\Altsoft\ASAFA1\orders.txt','a+'); 
    fputs($file,$_POST['phone']); //записать содержимое формы
    fwrite($file, '|'); //поставить линию
    fputs($file,$_POST['e-mail']); //записать содержимое формы
    fwrite($file, '|'); //поставить линию
    fputs($file,$_POST['name']); //записать содержимое формы
    fwrite($file, '|'); //поставить линию
    fputs($file,$_POST['surname']); //записать содержимое формы
    fwrite($file, '
    ');
    fclose($file); 
    }
echo " Ваша заявка успешно принята!";
$phone=$_POST['phone'];        
echo "$phone";
 ?>
    </body>
</html>