 
<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `leavetype` (`LType_ID`,`LTypeName`,
    `Number`,`AdvanceNotice`,`LOrdinal`, `QuotaStatus`,`leavetype_remark`,
     `Empstatus_ID` ) VALUES (
         '".$_POST['LType_ID']."',
         '".$_POST['LTypeName']."',
         '".$_POST['Number']."',
         '".$_POST['AdvanceNotice']."',
         '".$_POST['LOrdinal']."',
         '".$_POST['QuotaStatus']."',
         '".$_POST['leavetype_remark']."',
         '".$_POST['Empstatus_ID']."')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    