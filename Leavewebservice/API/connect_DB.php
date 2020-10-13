<?php
header("Access-Control-Allow-Origin: *");
header('Control-type: application/json',true);

 $servername = "localhost";
 $username = "root";
 $password = "root1234";
 $dbname = "table_leavesystem";
 
 $conn = new mysqli($servername, $username, $password, $dbname);
 $conn -> set_charset("utf8");