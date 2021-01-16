<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql = "UPDATE `leave` SET `LeaveStatus_Document`='".$_POST['LeaveStatus_Document']."' 
    WHERE  `leave`.`leave_ID` = '".$_POST['leave_ID']."'";
    if ($conn->query($sql) === TRUE) {
      echo json_encode('success');
    } else {
    
      echo json_encode($conn->error);
    }