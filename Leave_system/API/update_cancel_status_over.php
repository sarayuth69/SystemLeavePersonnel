<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
 
 $sql = "UPDATE `leave` SET `leave`.LeaveTotal = `leave`.LeaveTotal  - '".$_POST['cancel_total']."',`leave`. number_leave = `leave`.number_leave-1,`leave`.Name_Leave = '".$_POST['Name_Leave']."' WHERE `leave`.leave_ID = '".$_POST['leave_ID']."'";
 
 
 if ($conn->query($sql) === TRUE) {
    echo "successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }