<?php
header("Access-Control-Allow-Origin: *");
header('Control-type: application/json',true);

 $servername = "localhost";
 $username = "root";
 $password = "cpe@rmuti1234";
 $dbname = "leave_system";
 
 $conn = new mysqli($servername, $username, $password, $dbname);
 $conn -> set_charset("utf8");