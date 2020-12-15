<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql = "UPDATE `officiate_day` SET `Status_Work`='".$_POST['Status_Work']."',`Data`='".$_POST['Data']."' ,
    `message`='".$_POST['message']."' 
    WHERE  `officiate_day`.`Day_ID` = '".$_POST['Day_ID']."'
    
    ";
    
    if ($conn->query($sql) === TRUE) {
        echo "successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }