 
<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `position` (`Position_ID`, `PositionName`,`Role`) VALUES 
    (

    '".$_POST['Position_ID']."',
    '".$_POST['PositionName']."',
    '".$_POST['Role']."'
    )
    ";
     if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    