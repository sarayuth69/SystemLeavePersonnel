<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
 
    $sql = "UPDATE `employee` SET `Emp_ID`='".$_POST['Emp_ID']."',`EmpName`='".$_POST['EmpName']."'
    ,`EmpLastName`='".$_POST['EmpLastName']."',`Sex`='".$_POST['Sex']."',`Birthday`='".$_POST['Birthday']."'
    ,`ID_card`='".$_POST['ID_card']."',`Age`='".$_POST['Age']."',`Address`='".$_POST['Address']."',`Tel`='".$_POST['Tel']."'
    ,`Work_day`='".$_POST['Work_day']."',`Duration_work`='".$_POST['Duration_work']."'
    ,`Empstatus_ID`='".$_POST['Empstatus_ID']."',`Position_ID`='".$_POST['Position_ID']."'
    ,`Dept_ID`='".$_POST['Dept_ID']."'
    WHERE  `employee`.`Emp_ID` = '".$_POST['Emp_ID']."'
    
    ";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }