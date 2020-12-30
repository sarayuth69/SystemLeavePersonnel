<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    $sql  = "UPDATE
    `holiday`
SET
    `holiday_ID` = '".$_POST["holiday_ID"]."',
    `holiday_date` = '".$_POST["holiday_date"]."',
    `holiday_data` = '".$_POST["holiday_data"]."'
WHERE
`holiday`.`holiday_ID` = '".$_POST["holiday_ID"]."' "; 
if ($conn->query($sql) === TRUE) {
    echo "successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }