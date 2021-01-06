<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES 
    (

    '".$_POST['Dept_ID']."',
    '".$_POST['DeptName']."'
 
    )
    ";
   
   if ($conn->query($sql) === TRUE) {
    echo "successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
