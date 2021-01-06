
<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

  //   $sql  = "INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, 
  //   `Birthday`,`ID_card`, `Age`, `Address`, `Tel`,`Username`,`Password`, `Work_day`, `Duration_work`, `Empstatus_ID`, `Position_ID`
  //   , `Dept_ID`) VALUES
  //    (
  //   '".$_POST['Emp_ID']."',
  //   '".$_POST['Prefix']."',
  //   '".$_POST['EmpName']."',
  //   '".$_POST['EmpLastName']."',
  //   '".$_POST['Sex']."',
  //   '".$_POST['Birthday']."',
  //   '".$_POST['ID_card']."',
  //   '".$_POST['Age']."',
  //   '".$_POST['Address']."',
  //   '".$_POST['Tel']."',
  //   '".$_POST['Username']."',
  //   '".$_POST['Password']."',
  //   '".$_POST['Work_day']."',
  //   '".$_POST['Duration_work']."',
  //   '".$_POST['Empstatus_ID']."',
  //   '".$_POST['Position_ID']."',
  //   '".$_POST['Dept_ID']."'
   
  //   )
  //   ";
  //    if ($conn->query($sql) === TRUE) {
  //   echo "New record created successfully";
  // } else {
  //   echo "Error: " . $sql . "<br>" . $conn->error;
  // }


  $sql  = "INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, 
     `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`,
     `Username`,`Password`, `Work_day`,`Duration_work`, 
     `Empstatus_ID`, `Position_ID`, `Dept_ID`) VALUES 
     (
     '".$_POST['Emp_ID']."',
     '".$_POST['Prefix']."',
     '".$_POST['EmpName']."',
     '".$_POST['EmpLastName']."',
     '',
     '".$_POST['ID_card']."',
     '".$_POST['Address']."',
     '',
     '',
     '',
     NOW(),
     '',
     '',
     '',
     ''
     )
     ON DUPLICATE KEY UPDATE
     Emp_ID ='" . $_POST['Emp_ID'] . "',
     Prefix='".$_POST['Prefix']."',
     EmpName= '".$_POST['EmpName']."',
     EmpLastName='".$_POST['EmpLastName']."'
     ";
    if ($conn->query($sql) === TRUE) {
       echo "successfully";
     } else {
       echo "Error: " . $sql . "<br>" . $conn->error;
     }