<?php
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/EmpModel.php');
    
        $name = $_POST['a'];

$Emp_Model = new EmpModel;
$Emp = $Emp_Model -> pdf($name);
?>