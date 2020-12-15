
<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    
    $sql  = "INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES 
    (

    '".$_POST['Empstatus_ID']."',
    '".$_POST['EmpstatusName']."'
    )
    ";
     if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    