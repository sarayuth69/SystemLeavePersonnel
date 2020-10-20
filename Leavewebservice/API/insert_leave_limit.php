<?php

 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `leave_limit` (`id`, `Date_start`, `limit_date`) VALUES 
    (

    '".$_POST['id']."',
    '".$_POST['Date_start']."',
    '".$_POST['limit_date']."'
    )
    ";
   
   if ($conn->query($sql) === TRUE) {
    echo "successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
