<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

     $sql = "UPDATE `leave` SET `LeaveStatus_ID` = '".$_POST['LeaveStatus_ID']."' WHERE `leave`.`Leave_ID` = '".$_POST['Leave_ID']."'";

    
    if ($conn->query($sql) === TRUE) {
        echo "successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }