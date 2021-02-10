<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    $sql = "UPDATE `leave_limit` SET `Name_limit`='".$_POST['Name_limit']."',`Date_start`='".$_POST['Date_start']."' ,
    `limit_date`='".$_POST['limit_date']."' 
    WHERE  `leave_limit`.`limit_ID` = '".$_POST['limit_ID']."'
    ";
    
    if ($conn->query($sql) === TRUE) {
        echo "successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }