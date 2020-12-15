<?php

 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `leave_limit` (`limit_ID`,`Name_limit`, `Date_start`, `limit_date`) VALUES 
    (

    '".$_POST['limit_ID']."',
    '".$_POST['Name_limit']."',
    '".$_POST['Date_start']."',
    '".$_POST['limit_date']."'
    )
    ";
   
   if ($conn->query($sql) === TRUE) {
    echo "successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
