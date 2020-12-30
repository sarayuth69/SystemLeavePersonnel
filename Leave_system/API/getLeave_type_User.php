<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    // $sql  = "SELECT
    // employee.Emp_ID,
    // employee.EmpName,
    // employee.Empstatus_ID,
    // leavetype.LTypeName,
    // leavetype.Number,
    // leavetype.AdvanceNotice,
    // employeestatus.EmpstatusName,
    // leavetype.LOrdinal,
    // leavetype.QuotaStatus,
    // leavetype.LType_ID,
    // IFNULL(sum(`leave`.LeaveTotal),0) ,
    // IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number) as  Remain
    // FROM
    // employee
    // LEFT JOIN leavetype ON leavetype.Empstatus_ID = employee.Empstatus_ID
    // LEFT JOIN employeestatus ON employeestatus.Empstatus_ID = employee.Empstatus_ID
    // LEFT JOIN (SELECT * FROM `leave` WHERE LeaveStatus_Document ='Y' AND LeaveStatus_ID = 5 )AS `leave` ON `leave`.Emp_ID = employee.Emp_ID 
    // AND `leave`.LType_ID = leavetype.LType_ID
    // WHERE 
    //   employee.Emp_ID ='".$_POST["Emp_ID"]."' 
    // GROUP BY
    // employee.Emp_ID,
    // leavetype.LType_ID
    // ";
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
        leavetype.LType_ID,
        leavetype.LType_limit,
        IFNULL(SUM(cancel_leave.cancel_total),0) AS cancel_total_show,
        IFNULL(sum(`leave`.number_leave),0) AS number_leave_show,
        IFNULL(sum(`leave`.LeaveTotal),0) AS sum_total ,
        -- ค่าคงเหลือ
            IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
          <0,0,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number) ) AS Remain, 
        --   ค่าที่ลาเกิน
          IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
          <0,ABS(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)),0) AS Remain_over,
        --   ค่าที่สามารถลาเกินได้
            IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)
            <0,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+LType_limit,0) AS Remain_limit
        FROM
        employee
        LEFT JOIN leavetype ON leavetype.Empstatus_ID = employee.Empstatus_ID
        LEFT JOIN employeestatus ON employeestatus.Empstatus_ID = employee.Empstatus_ID
        LEFT JOIN (SELECT * FROM `leave` WHERE  LeaveStatus_ID = 5 )AS `leave` ON `leave`.Emp_ID = employee.Emp_ID 
        LEFT JOIN  (SELECT * FROM `cancel_leave` WHERE  cancel_status = 8 )AS cancel_leave ON  cancel_leave.leave_ID = `leave`.leave_ID
        -- LEFT JOIN leave_limit ON `leave`.limit_ID = leave_limit.limit_ID
        -- AND `leave`.LeaveDateStart BETWEEN `leave_limit`.Date_start AND ADDDATE(`leave_limit`.Date_start,INTERVAL limit_date  MONTH)
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