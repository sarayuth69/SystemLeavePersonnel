<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    

    $sql = "UPDATE `position` SET `Position_ID` = '".$_POST['Position_ID']."', `PositionName` = '".$_POST['PositionName']."',
    `Role` = '".$_POST['Role']."'
    WHERE `position`.`Position_ID` = '".$_POST['Position_ID']."';
   ";
   
   if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }