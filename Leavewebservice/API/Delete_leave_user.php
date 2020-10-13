<?php

 require 'connect_DB.php' ;
    $sql  = "DELETE FROM `leave` WHERE (`Leave_ID`='".$_GET["Leave_ID"]."') = ";
     if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }