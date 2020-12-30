<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 $sql  = "SELECT employee.Emp_ID,
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
     -- AND `leave`.LeaveDateStart BETWEEN '2020-01-01' AND ADDDATE('2020-01-01',INTERVAL 2  MONTH)
     AND `leave`.LType_ID = leavetype.LType_ID
 WHERE 
   employee.Emp_ID ='".$_GET["Emp_ID"]."'  
 GROUP BY
 employee.Emp_ID,
 leavetype.LType_ID";
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


































//     $sql  = "SELECT
//     `employee`.`EmpName`,`employee`.`EmpLastName`,
// IFNULL(`leave`.`Leave_ID`,0),
// IFNULL(YEAR(`LeaveDateStart`),YEAR(CURDATE())) AS `year`,
// Sum(IF(MONTH(`LeaveDateStart`)=1,`LeaveTotal`,0)) AS Jan,
//   SUM(IF(MONTH(`LeaveDateStart`)=2,`LeaveTotal`,0)) AS `Feb`,
//     SUM(IF(MONTH(`LeaveDateStart`)=3,`LeaveTotal`,0)) AS `Mar`,
//     SUM(IF(MONTH(`LeaveDateStart`)=4,`LeaveTotal`,0)) AS `Apr`,
//     SUM(IF(MONTH(`LeaveDateStart`)=5,`LeaveTotal`,0)) AS `May`,
//     SUM(IF(MONTH(`LeaveDateStart`)=6,`LeaveTotal`,0)) AS `Jun`,
//     SUM(IF(MONTH(`LeaveDateStart`)=7,`LeaveTotal`,0)) AS `Jul`,
//     SUM(IF(MONTH(`LeaveDateStart`)=8,`LeaveTotal`,0)) AS `Aug`,
//     SUM(IF(MONTH(`LeaveDateStart`)=9,`LeaveTotal`,0)) AS `Sep`,
//     SUM(IF(MONTH(`LeaveDateStart`)=10,`LeaveTotal`,0)) AS `Oct`,
//     SUM(IF(MONTH(`LeaveDateStart`)=11,`LeaveTotal`,0)) AS `Nov`,
//     SUM(IF(MONTH(`LeaveDateStart`)=12,`LeaveTotal`,0)) AS `Dec`,
//         IFNULL(sum(`LeaveTotal`),0) as Total
// FROM
//     `employee`
// LEFT JOIN (SELECT * FROM `leave` WHERE `leave`.`LeaveStatus_ID` = '5' ) AS`leave` ON `employee`.`Emp_ID` = `leave`.`Emp_ID`
//     WHERE 1
//     GROUP BY `employee`.`Emp_ID`";
//     $result = mysqli_query($conn,$sql); 
//     $myArray = array();
//     if ($result->num_rows > 0) {
//     // output data of each row
//         while($row = $result->fetch_assoc()) {
//             $myArray[] = $row;
//         }
//         print json_encode($myArray);
//     } 
//     else 
//     {
//         echo "0 results";
//     }