<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "SELECT
    employee.Emp_ID,
    employee.EmpName,
    employee.Empstatus_ID,
    leavetype.LTypeName,
    leavetype.Number,
    leavetype.AdvanceNotice,
    employeestatus.EmpstatusName,
    leavetype.LOrdinal,
    leavetype.QuotaStatus,
    IFNULL(sum(`leave`.LeaveTotal),0) ,
    IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number) as  Remain
    FROM
    employee
    LEFT JOIN leavetype ON leavetype.Empstatus_ID = employee.Empstatus_ID
    LEFT JOIN employeestatus ON employeestatus.Empstatus_ID = employee.Empstatus_ID
    LEFT JOIN (SELECT * FROM `leave` WHERE LeaveStatus_Document ='Y' AND LeaveStatus_ID = 5 )AS `leave` ON `leave`.Emp_ID = employee.Emp_ID 
    AND `leave`.LType_ID = leavetype.LType_ID
    WHERE 
      employee.Emp_ID ='".$_POST["Emp_ID"]."' 
    GROUP BY
    employee.Emp_ID,
    leavetype.LType_ID
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