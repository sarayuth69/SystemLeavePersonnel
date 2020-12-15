<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 $SSO = json_decode(\file_get_contents('../../QR_Student/sso/catchJson/' . $_REQUEST["perid"] . '.json'));
        \unlink('../../QR_Student/sso/catchJson/' . $_REQUEST["perid"] . '.json');

        echo $SSO;