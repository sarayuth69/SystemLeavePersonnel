<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "DELETE FROM `holiday` WHERE `holiday`.`holiday_ID` = '".$_GET["holiday_ID"]."'";
    if ($conn->query($sql) === TRUE) {
        echo "successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }