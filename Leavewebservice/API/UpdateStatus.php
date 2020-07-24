<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    
    $sql = "UPDATE `employeestatus` SET `Empstatus_ID`='".$_POST['Empstatus_ID']."',
    `EmpstatusName`='".$_POST['EmpstatusName']."' 
    WHERE  `employeestatus`.`Empstatus_ID` = '".$_POST['Empstatus_ID']."'
    
    ";
    
     
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }