<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 $sql  = "SELECT
 *
FROM  
 `leave`
JOIN `employee` ON `leave`.`Emp_ID` = `employee`.`Emp_ID`
JOIN `department`ON `employee`.`Dept_ID` = `department`.`Dept_ID`
JOIN `leavetype` ON `leave`.`LType_ID` = `leavetype`.`LType_ID`
JOIN `leavestatus` ON `leave`.`LeaveStatus_ID` = `leavestatus`.`LeaveStatus_ID`
WHERE  
leave.Emp_ID = '".$_POST["Emp_ID"]."'
ORDER BY `leave`.`LeaveDateStart` DESC

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