 
<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


    $sql  = "INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES 
    (

    '".$_POST['Sector_ID']."',
    '".$_POST['SectorName']."'
    )
    ";
   if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
