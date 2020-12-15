<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 $sql  = "SELECT
 *
    FROM `employee`
    JOIN `leave` ON `employee`.`Emp_ID` = `leave`.`Emp_ID`
    JOIN `leavetype` ON `leave`.`LType_ID` = `leavetype`.`LType_ID`
    JOIN `leavestatus` ON `leavestatus`.`LeaveStatus_ID` = `leave`.`LeaveStatus_ID`
    JOIN `department` ON `employee`.`Dept_ID` = `department`.`Dept_ID`
    JOIN `position` ON `employee`.`Position_ID` = `position`.`Position_ID`
    JOIN `sector` ON `department`.`Sector_ID` = `sector`.`Sector_ID`
WHERE  
leave.Emp_ID = '".$_POST["Emp_ID"]."' AND `leave`.LeaveStatus_ID < 7
ORDER BY `leave`.`Leave_ID` DESC

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