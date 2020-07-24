<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`,`Emp_ID`,
    `Data`) VALUES 
    (

    '".$_POST['Day_Work']."',
    '".$_POST['Status_Work']."',
    '".$_POST['Emp_ID']."',
    '".$_POST['Data']."'
    )
    ";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }