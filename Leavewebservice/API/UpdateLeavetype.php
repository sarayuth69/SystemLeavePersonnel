<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
 
    $sql = "UPDATE `leavetype` SET `LType_ID`='".$_POST['LType_ID']."',`LTypeName`='".$_POST['LTypeName']."'
    ,`Number`='".$_POST['Number']."',`Remain`='".$_POST['Remain']."',`AdvanceNotice`='".$_POST['AdvanceNotice']."'
    ,`LOrdinal`='".$_POST['LOrdinal']."',`QuotaStatus`='".$_POST['QuotaStatus']."',`Empstatus_ID`='".$_POST['Empstatus_ID']."'
    WHERE  `leavetype`.`LType_ID` = '".$_POST['LType_ID']."'
    
    ";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }