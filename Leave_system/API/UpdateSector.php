<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql = "UPDATE `sector` SET `Sector_ID`='".$_POST['Sector_ID']."',`SectorName`='".$_POST['SectorName']."' 
    WHERE  `sector`.`Sector_ID` = '".$_POST['Sector_ID']."'
    
    ";
    
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }