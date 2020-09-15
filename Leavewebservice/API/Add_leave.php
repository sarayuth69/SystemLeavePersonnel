<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


//  $_POST['file_names'] = $_FILES['myFile']['name'];
// if($_FILES){
// $target_dir = '../upload/'.$_POST['file_names'] ;
// echo $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
// move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_file);
// }
// print_r($data);


    $sql  = "INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`,`To_Person`,`LeaveDateStart`, `LeaveDateLast`, 
    `LeaveData`, `ContactInformation`,`employee`, `LeaveTotal`, `LeaveStatus_ID`,
    `LeaveStatus_Document`, `Response_Time`, `Person_Code_Allow`,`LType_ID`) 
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
    '".$_POST['employee']."',
    '".$_POST['LeaveTotal']."',
    '".$_POST['LeaveStatus_ID']."',
    '".$_POST['LeaveStatus_Document']."',
    '".$_POST['Response_Time']."',
    '".$_POST['Person_Code_Allow']."',
    '".$_POST['LType_ID']."'
    )"; 
 if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }