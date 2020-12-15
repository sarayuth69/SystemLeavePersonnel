<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


    $sql = "UPDATE `department` SET `Dept_ID`='".$_POST['Dept_ID']."',`DeptName`='".$_POST['DeptName']."' 
    ,`Sector_ID`='".$_POST['Sector_ID']."'
    WHERE  `department`.`Dept_ID` = '".$_POST['Dept_ID']."'
    
    ";
    
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }