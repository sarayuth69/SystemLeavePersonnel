<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    $sql  = "INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`,`To_Person`,`LeaveDateStart`, `LeaveDateLast`, 
    `LeaveData`, `ContactInformation`, `LeaveTotal`, `LeaveStatus_ID`,`LeaveStatus`, `Response_Time`, `Person_Code_Allow`,`LType_ID`) 
      VALUES
     (
    '".$_POST['Leave_ID']."',
    '".$_POST['Emp_ID']."',
    '".$_POST['Name_Leave']."',
    '".$_POST['To_Person']."',
    '".$_POST['LeaveDateStart']."',
    '".$_POST['LeaveDateLast']."',
    '".$_POST['LeaveData']."',
    '".$_POST['ContactInformation']."',
    '".$_POST['LeaveTotal']."',
    '".$_POST['LeaveStatus_ID']."',
    '".$_POST['LeaveStatus']."',
    '".$_POST['Response_Time']."',
    '".$_POST['Person_Code_Allow']."',
    '".$_POST['LType_ID']."'
    )"; 
 if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }