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
    DATEDIFF(NOW(),employee.Work_day)/365 AS date_diff_work,
    SUBSTRING(`leave_limit`.`Name_limit`,10),
-- 	การลาแต่ละครั้ง
  -- การลารวม
  
    IFNULL(sum(`leave`.LeaveTotal),0) AS sum_total ,
    -- ค่าคงเหลือ
   IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
      <0,0,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number) ) AS Remain, 
    --   ค่าที่ลาเกิน
      IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
      <0,ABS(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)),0) AS Remain_over
   
    FROM
    employee
    LEFT JOIN leavetype ON leavetype.Empstatus_ID = employee.Empstatus_ID
    LEFT JOIN employeestatus ON employeestatus.Empstatus_ID = employee.Empstatus_ID
    LEFT JOIN (SELECT * FROM `leave` WHERE  LeaveStatus_ID = 5 AND `leave`.Emp_ID ='".$_POST['Emp_ID']."')AS `leave` ON  `leave`.LType_ID = leavetype.LType_ID
     LEFT JOIN  leave_limit ON `leave`.limit_ID = leave_limit.limit_ID
   
    AND `leave`.LType_ID = leavetype.LType_ID 
WHERE 
  employee.Emp_ID ='".$_POST['Emp_ID']."' AND leavetype.QuotaStatus = 'ลาได้' AND leavetype.LType_ID ='".$_POST['LType_ID']."'
  AND SUBSTRING(`leave_limit`.`Name_limit`,10) = '".$_POST['Name_limit']."'
GROUP BY
employee.Emp_ID,
leavetype.LType_ID, 
SUBSTRING(`leave_limit`.`Name_limit`,10)
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