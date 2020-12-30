<?php

 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `holiday` (`holiday_ID`,`holiday_date`,`holiday_data`) VALUES 
    (

    '".$_POST['holiday_ID']."',
    '".$_POST['holiday_date']."',
    '".$_POST['holiday_data']."'
   
    )
    ";
   
   if ($conn->query($sql) === TRUE) {
    echo "successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
