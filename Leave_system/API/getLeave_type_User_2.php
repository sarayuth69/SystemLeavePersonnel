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

       

#IFNULL((SELECT sum(`leave`.number_leave)  FROM leave WHERE  `leave`.LType_ID = leavetype.LType_ID AND `leave`.Emp_ID =employee.Emp_ID and year(now()) = year(Response_Time)  GROUP BY `leave`.LType_ID ),0) AS number_leave_show,
#IFNULL((SELECT sum(`leave`.LeaveTotal) FROM leave WHERE  `leave`.LType_ID = leavetype.LType_ID AND `leave`.Emp_ID =employee.Emp_ID  and year(now()) = year(Response_Time)   GROUP BY `leave`.LType_ID ),0) AS sum_total,


-- 	การลาแต่ละครั้ง
 IFNULL(sum(`leave`.number_leave),0) AS number_leave_show,
			-- การลารวม
        IFNULL(sum(`leave`.LeaveTotal),0) AS sum_total ,
        -- ค่าคงเหลือ
            IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
          <0,0,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number) ) AS Remain, 
        --   ค่าที่ลาเกิน
          IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
          <0,ABS(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)),0) AS Remain_over
        --   ค่าที่สามารถลาเกินได้
            -- IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)
            -- <0,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+LType_limit,0) AS Remain_limit
        FROM
        employee
        LEFT JOIN leavetype ON leavetype.Empstatus_ID = employee.Empstatus_ID
        LEFT JOIN employeestatus ON employeestatus.Empstatus_ID = employee.Empstatus_ID
        LEFT JOIN (SELECT * FROM `leave` WHERE  LeaveStatus_ID = 5 AND `leave`.Emp_ID ='".$_POST["Emp_ID"]."' AND  `leave`.limit_ID = '".$_POST["limit_ID"]."' )AS `leave` ON  `leave`.LType_ID = leavetype.LType_ID
     LEFT JOIN leave_limit ON `leave`.limit_ID = leave_limit.limit_ID
        -- AND `leave`.LeaveDateStart BETWEEN `leave_limit`.Date_start AND ADDDATE(`leave_limit`.Date_start,INTERVAL limit_date  MONTH)
        AND `leave`.LType_ID = leavetype.LType_ID 
    WHERE 
      employee.Emp_ID ='".$_POST["Emp_ID"]."' AND leavetype.QuotaStatus = 'ลาได้' AND leavetype.LType_ID = '".$_POST["LType_ID"]."'
    GROUP BY
    employee.Emp_ID,
    `leave`.limit_ID,
    leavetype.LType_ID
    ORDER BY leavetype.LType_ID
    ";



//     $sql  = "SELECT
//     employee.Emp_ID,
//     employee.Prefix,
//         employee.EmpName,
//         employee.Empstatus_ID,
//         employee.Work_day,
//         leavetype.LTypeName,
//         leavetype.Number,
//         leavetype.AdvanceNotice,
//         leavetype.LOrdinal,
//         employeestatus.EmpstatusName,
//         leavetype.QuotaStatus,
//         leavetype.LType_ID,
//         leavetype.LType_limit,
        

      

// -- 	การลาแต่ละครั้ง
// CASE 
//  WHEN leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) < '2021-12-31' AND (employee.Empstatus_ID=201 OR employee.Empstatus_ID=202 OR employee.Empstatus_ID=203)
// THEN
// IFNULL(sum(`leave`.LeaveTotal),0) 
// WHEN leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) > '2021-12-31' AND (employee.Empstatus_ID=201 OR employee.Empstatus_ID=202 OR employee.Empstatus_ID=203)
// THEN
// 0
// WHEN leavetype.LTypeName != 'ลาพักผ่อน' 
// THEN
// IFNULL(sum(`leave`.LeaveTotal),0)
//  END AS sum_total,
//  CASE 
//  WHEN leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) < '2021-12-31' AND (employee.Empstatus_ID=201 OR employee.Empstatus_ID=202 OR employee.Empstatus_ID=203)
//  THEN
//  IFNULL(sum(`leave`.number_leave),0) 
// 			-- การลารวม
      
          
//   WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) > '2021-12-31' AND (employee.Empstatus_ID=201 OR employee.Empstatus_ID=202 OR employee.Empstatus_ID=203)
//  THEN
//         	0
//         	WHEN  leavetype.LTypeName != 'ลาพักผ่อน'
//  THEN
//         IFNULL(sum(`leave`.number_leave),0) 
//         END AS number_leave_show,
//         -- ค่าคงเหลือ
// 			CASE 
// 			-- การลาพักผ่อน ของลูกจ้างเงินรายได้
// 			WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) < '2021-12-31' AND employee.Empstatus_ID=201  
// 			THEN  	
// 			  IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)
	
// 	   	WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) > '2021-12-31' AND employee.Empstatus_ID=201 
// 	   	THEN  
// 		    IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
//           <10,10,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number) )
          
          
          
          
//           -- ลาพักผ่อน วันปัจจุบันน้อยกว่าวันปีไหม่ แล่อายุงานไม่ถึง 10 ปี และ วันลาสะสมไม่ถึง 20 วัน จะคิดคำนวนปกติ
//        WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) < '2021-12-31' AND (employee.Empstatus_ID=202 OR employee.Empstatus_ID=203)  AND
//        	DATEDIFF(NOW(),employee.Work_day )  < 3653 AND IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+leavetype.Number < 20
// 		 THEN  
//          IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)
          
          
          
//            -- ลาพักผ่อน วันปัจจุบันมากกว่าวันปีไหม่ แล่อายุงานไม่ถึง 10 ปี และ วันลาสะสมมากกว่า 20 วัน จะไห้เหลือแค่ 20 วัน
//           WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) > '2021-12-31' AND (employee.Empstatus_ID=202 OR employee.Empstatus_ID=203) AND
// 	DATEDIFF(NOW(),employee.Work_day )  < 3653 AND   IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+leavetype.Number > 20
// 	THEN  
// 		20
 
          
//             -- ลาพักผ่อน วันปัจจุบันมากกว่าวันปีไหม่ แล่อายุงานไม่ถึง 10 ปี และ วันลาสะสมน้อยกว่า 20 วัน จะไห้เหลือแค่ 20 วัน
//          WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) > '2021-12-31' AND (employee.Empstatus_ID=202 OR employee.Empstatus_ID=203) AND
// 	DATEDIFF(NOW(),employee.Work_day )  < 3653 AND IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+leavetype.Number < 20
// 	THEN  
//   IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
//        <20,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number) +leavetype.Number ,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number))
   
  
    
 
  
//   -- ลาพักผ่อน วันปัจจุบันน้อยกว่าวันปีไหม่ แล่อายุงานมากวว่า10 ปี และ วันลาสะสมไม่ถึง 30 วัน จะคิดคำนวนปกติ<
  
//     WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) < '2021-12-31' AND (employee.Empstatus_ID=202 OR employee.Empstatus_ID=203)  AND
//        	DATEDIFF(NOW(),employee.Work_day )  > 3653 AND IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+leavetype.Number < 30
// 		 THEN  
//          IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)
          
          
          
          
//           WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) > '2021-12-31' AND (employee.Empstatus_ID=202 OR employee.Empstatus_ID=203) AND
// 	DATEDIFF(NOW(),employee.Work_day )  > 3653 AND   IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+leavetype.Number > 30
// 	THEN  
// 		30
 
          
          
//          WHEN  leavetype.LTypeName = 'ลาพักผ่อน' AND DATE(NOW()) > '2021-12-31' AND (employee.Empstatus_ID=202 OR employee.Empstatus_ID=203) AND
// 	DATEDIFF(NOW(),employee.Work_day )  > 3653 AND IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)+leavetype.Number < 30
// 	THEN  
//   IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
//        <30,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number) +leavetype.Number ,IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number))
   
  
		 
	
         
          
          
 
          
//          WHEN  leavetype.LTypeName != 'ลาพักผ่อน'  
// 			THEN  
//         		IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)
//         END AS Remain,
     
//         --   ค่าที่ลาเกิน
//           IF(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)  
//           <0,ABS(IFNULL(leavetype.Number -  sum(`leave`.LeaveTotal),leavetype.Number)),0) AS Remain_over
    
//       FROM
//         employee
//         LEFT JOIN leavetype ON leavetype.Empstatus_ID = employee.Empstatus_ID
//         LEFT JOIN employeestatus ON employeestatus.Empstatus_ID = employee.Empstatus_ID
//         LEFT JOIN (SELECT * FROM `leave` WHERE  LeaveStatus_ID = 5 AND `leave`.Emp_ID ='".$_POST["Emp_ID"]."' AND  `leave`.limit_ID = '".$_POST["limit_ID"]."' )AS `leave` ON  `leave`.LType_ID = leavetype.LType_ID
//      LEFT JOIN leave_limit ON `leave`.limit_ID = leave_limit.limit_ID
//         -- AND `leave`.LeaveDateStart BETWEEN `leave_limit`.Date_start AND ADDDATE(`leave_limit`.Date_start,INTERVAL limit_date  MONTH)
//         AND `leave`.LType_ID = leavetype.LType_ID 
//     WHERE 
//       employee.Emp_ID ='".$_POST["Emp_ID"]."' AND leavetype.QuotaStatus = 'ลาได้'
//     GROUP BY
//     employee.Emp_ID,
//     `leave`.limit_ID,
//     leavetype.LType_ID
//     ORDER BY leavetype.LType_ID
    
   
    
//     ";
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