<?php

 require 'connect_DB.php' ;

    $sql  ="SELECT COUNT(`leave`.`LeaveStatus_ID`) as countleave FROM `leave`
    JOIN `employee` ON `leave`.`Emp_ID` = `employee`.`Emp_ID`
    JOIN `department` ON `employee`.`Dept_ID` = `department`.`Dept_ID`
    JOIN `position` ON `employee`.`Position_ID` = `position`.`Position_ID`
    JOIN `leavetype` ON `leave`.`LType_ID` =`leavetype`.`LType_ID`
    JOIN `leavestatus` ON `leave`.`LeaveStatus_ID` = `leavestatus`.`LeaveStatus_ID`
    WHERE 
    `employee`.`Dept_ID` = '".$_POST["Dept_ID"]."' AND `leave`.`LeaveStatus_ID` = '1' 
        ";
         $result = mysqli_query($conn,$sql); 
         $myArray = array();
         if ($result->num_rows > 0) {
             
         // output data of each row
             while($row = $result->fetch_assoc()) {
                 $myArray[] = $row;
             }
             print json_encode($myArray);
         } 
         else 
         {
             echo "0 results";
         }