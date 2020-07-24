<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `department` (`Dept_ID`, `DeptName`,`Sector_ID`) VALUES 
    (

    '".$_POST['Dept_ID']."',
    '".$_POST['DeptName']."',
    '".$_POST['Sector_ID']."'
    )
    ";
   
   if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
