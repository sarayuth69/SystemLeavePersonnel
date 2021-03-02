<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
  
    $sql  = "SELECT
    employee.Emp_ID,
    employee.Prefix,
        employee.EmpName,
        employee.Empstatus_ID,
        employee.Work_day,
        leavetype.LTypeName,
        leavetype.Number,
        leavetype.AdvanceNotice,
        leavetype.LOrdinal,
        employeestatus.EmpstatusName,
        leavetype.QuotaStatus,
        leavetype.LType_ID,
        leavetype.LType_limit,
         case
         WHEN   (employee.Empstatus_ID=202 OR employee.Empstatus_ID=203)
		
		THEN  
      IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+leavetype.Number
        
      WHEN   (employee.Empstatus_ID=202 OR employee.Empstatus_ID=203) AND
		  IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+leavetype.Number > 30
		THEN  
      30 
        
        END AS Remain
      FROM
        employee
        LEFT JOIN leavetype ON leavetype.Empstatus_ID = employee.Empstatus_ID
        LEFT JOIN employeestatus ON employeestatus.Empstatus_ID = employee.Empstatus_ID
        LEFT JOIN (SELECT * FROM `leave` WHERE  LeaveStatus_ID = 5 AND `leave`.Emp_ID ='".$_POST["Emp_ID"]."'  )AS `leave` ON  `leave`.LType_ID = leavetype.LType_ID
     LEFT JOIN leave_limit ON `leave`.limit_ID = leave_limit.limit_ID
       
        AND `leave`.LType_ID = leavetype.LType_ID 
    WHERE 
      employee.Emp_ID ='".$_POST["Emp_ID"]."' AND leavetype.QuotaStatus = 'ลาได้'AND leavetype.LTypeName = 'ลาพักผ่อน'
   
    GROUP BY
    employee.Emp_ID,
    `leave`.limit_ID,
    leavetype.LType_ID
    ORDER BY leavetype.LType_ID
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