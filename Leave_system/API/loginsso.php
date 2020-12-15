<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


 $SSO = json_decode(\file_get_contents('../../QR_Student/sso/catchJson/'.$_GET['perid'].'.json'));
 \unlink('../../QR_Student/sso/catchJson/' . $_GET['perid'] . '.json');
 $SSO_1 = json_encode($SSO);
 echo $SSO_1;
//  foreach ($SSO_1 as $key => $value){
//     echo  $key . ':' . $value;
//   }