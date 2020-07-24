<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
   

 
    $sql  = "DELETE FROM `employee` WHERE `employee`.`Emp_ID` = '".$_GET["Emp_ID"]."'";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }