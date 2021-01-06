<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    $sql  = "INSERT INTO `cancel_leave` (`cancel_id`,`cancel_data`,`cancel_date_start`,`cancel_date_stop`,`cancel_total`,`cancel_status`,`leave_ID` ) 
    VALUES (
         '".$_POST['cancel_id']."',
         '".$_POST['cancel_data']."',
         '".$_POST['cancel_date_start']."',
         '".$_POST['cancel_date_stop']."',
         '".$_POST['cancel_total']."',
         '".$_POST['cancel_status']."',
         '".$_POST['leave_ID']."'
         )
         ";
    if ($conn->query($sql) === TRUE) {
        echo "successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    