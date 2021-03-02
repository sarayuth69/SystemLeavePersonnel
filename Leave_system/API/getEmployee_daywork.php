<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


 
 $sql  = "SELECT employee.Emp_ID,employee.EmpName,employee.EmpLastName,IFNULL(leavetype.LTypeName,'') AS LTypeName,
IFNULL (officiate_day.Emp_ID ,'') AS officiate_Emp_ID, IFNULL(officiate_day.Status_Work,'') AS off_Status_Work,IFNULL(officiate_day.`Data`,'') AS off_data,
IFNULL (officiate_day.Day_Work ,'') AS officiate_Day_Work
 FROM `employee`
LEFT JOIN (SELECT * FROM `leave` WHERE leave.LeaveStatus_ID = 5 AND (leave.LeaveDateStart = '".$_POST['Day_Work']."' OR leave.LeaveDateLast = '".$_POST['Day_Work']."' )) AS `leave` ON `employee`.`Emp_ID` = `leave`.`Emp_ID`
LEFT JOIN leavetype ON leavetype.LType_ID = leave.LType_ID
LEFT JOIN  (SELECT * FROM officiate_day WHERE officiate_day.Day_Work = '".$_POST['Day_Work']."' )officiate_day ON employee.Emp_ID = officiate_day.Emp_ID
 WHERE
   employee.status_data='Y' 
   GROUP BY employee.Emp_ID
   ORDER BY employee.Emp_ID

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
