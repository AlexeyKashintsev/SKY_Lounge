<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') 
    { 
    $file=fopen('E:\Altsoft\ASAFA1\orders.txt','a+');
	$n = isset($_POST['selectPeople']) ? $_POST['selectPeople'] : "";
	for ($i=1; $i<=$n;$i++){ 
	$str1 = "name$i";
	$str2 = "surname$i";
	fwrite($file,"Участник$i:\r\n");
	fwrite($file,"Имя: ");
	fputs($file,$_POST[$str1]."\r\n"); //записать содержимое формы
	fwrite($file,"Фамилия: ");
	fputs($file,$_POST[$str2]."\r\n"); //записать содержимое формы
	}
    fputs($file,$_POST['phone']."\r\n"); //записать содержимое формы
    fputs($file,$_POST['e-mail']."\r\n"); //записать содержимое формы
    $time=$_POST['time'];
    if ($time == '17.00'){
        fwrite($file, 'Отправление в 17.00'."\r\n");
    } elseif ($time == '18.00'){
        fwrite($file, 'Отправление в 18.00'."\r\n");
    } elseif ($time == '19.00'."\r\n"){
        fwrite($file, 'Отправление в 19.00'."\r\n");
    } else {
        fwrite($file, 'Без трансфера'."\r\n");
    };
    $weather=$_POST['weather'];
    if ($weather=='yes'){
        fwrite($file, 'Едет независимо от погоды'."\r\n");
    } else{ 
        fwrite($file, 'Погода важна'."\r\n");
    };
    $change=$_POST['change'];
    if ($change=='yes'){
        fwrite($file, 'Поедет при переносе'."\r\n");
    } else {
        fwrite($file, 'Сдаст билет'."\r\n");
    };
    $participation = $_POST['participation'];
    if ($participation == 'yes'){
        fwrite($file, 'Примет участие'."\r\n");
    } else {
       fwrite ($file, 'Не примет участие'."\r\n"); 
    };
    $tent=$_POST['tent'];
    if ($tent == 'yes'){
        fwrite($file, 'Нужна палатка'."\r\n");
    } else {
        fwrite($file, 'Палатка не нужна'."\r\n");
    };
    fwrite($file, 'Сумма к оплате: ');
	fputs($file, $_POST['pricetotal']);	
    $a = uniqid(sh);
	fwrite($file, "\r\n".'id: ');
	fputs($file, $a."\r\n");
	fwrite($file, "\r\n");	
	fclose($file); 
    }
	echo $a;
 ?>
