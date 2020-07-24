<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    $sql  = "UPDATE
    `leavetype`
    JOIN `leave` ON `leavetype`.`LType_ID` = `leave`.`LType_ID`
SET
    `leavetype`.`Remain` = (SELECT `leavetype`.`Remain` 
    WHERE `leavetype`.`LType_ID` = '".$_POST["LType_ID"]."') - '".$_POST["LeaveTotal"]."'
WHERE
     `leavetype`.`LType_ID` = '".$_POST["LType_ID"]."' "; 
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }