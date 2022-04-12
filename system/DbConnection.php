<?php
 
    $server = "localhost"; // имя хоста (уточняется у провайдера), если работаем на локальном сервере, то указываем localhost
    $username = "u1392848_shiroko"; // Имя пользователя БД
    $password = "qE4wG8pW0hgP7u"; // Пароль пользователя. Если у пользователя нету пароля то, оставляем пустое значение ""
    $database = "u1392848_shirokov"; // Имя базы данных, которую создали

    // Подключение к базе данных через MySQLi

    $mysqli = new mysqli($server, $username, $password, $database);
    
    // Проверяем, успешность соединения.

    if ($mysqli->connect_errno) {
 
        die("<p><strong>Ошибка подключения к БД</strong></p><p><strong>Код ошибки: </strong> ". $mysqli->connect_errno ." </p><p><strong>Описание ошибки:</strong> ".$mysqli->connect_error."</p>"); 
    }
  
    // Устанавливаем кодировку подключения.

    $mysqli->set_charset('utf8');

?>