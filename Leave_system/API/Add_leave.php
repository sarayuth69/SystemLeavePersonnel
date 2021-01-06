<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 if(isset($_FILES['myFile'])){
  $target_dir = '../upload/' ;
  $target_file = $target_dir .time().  basename($_FILES["myFile"]["name"]);
   // echo $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
  move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_file);
  }
    $sql  = "INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`,
    `To_Person`,`LeaveDateStart`,`Leave_characteristics_dateStart`,
     `LeaveDateLast`,`Leave_characteristics_dateLast`, `LeaveData`,
    `ContactInformation`,`employee`,
     `LeaveTotal`,`number_leave`, `LeaveStatus_ID`,`LeaveStatus_Document`, 
     `Response_Time`, `limit_ID`,`LType_ID`,`file_names`) 
      VALUES
     (
    '".$_POST['Leave_ID']."',
    '".$_POST['Emp_ID']."',
    '".$_POST['Name_Leave']."',
    '".$_POST['To_Person']."',
    '".$_POST['LeaveDateStart']."',
    '".$_POST['Leave_characteristics_dateStart']."',
    '".$_POST['LeaveDateLast']."',
    '".$_POST['Leave_characteristics_dateLast']."',
    '".$_POST['LeaveData']."',
    '".$_POST['ContactInformation']."',
    '".$_POST['employee']."',
    '".$_POST['LeaveTotal']."',
    '".$_POST['number_leave']."',
    '".$_POST['LeaveStatus_ID']."',
    '".$_POST['LeaveStatus_Document']."',
    NOW(),
    '".$_POST['limit_ID']."',
    '".$_POST['LType_ID']."',
    '".$target_file."'
    )"; 

  if ($conn->query($sql) === TRUE) {
        echo json_encode('success');
      } else {
      
        echo json_encode($conn->error);
      }