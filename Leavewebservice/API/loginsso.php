<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


 $SSO = json_decode(\file_get_contents('http://cpe.rmuti.ac.th/project/QR_Student/sso/catchJson/'.$_GET['perid'].'.json'));

 return $SSO;