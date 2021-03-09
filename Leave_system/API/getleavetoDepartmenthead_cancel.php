<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  ="SELECT *
    ,concat(day(LeaveDateStart),'/',
    case when(Month(LeaveDateStart))='1' then 'ม.ค.'
       when(Month(LeaveDateStart))='2' then 'ก.พ.'
       when(Month(LeaveDateStart))='3' then 'มี.ค'
       when(Month(LeaveDateStart))='4' then 'เม.ย.'
       when(Month(LeaveDateStart))='5' then 'พ.ค'
       when(Month(LeaveDateStart))='6' then 'มิ.ย.'
       when(Month(LeaveDateStart))='7' then 'ก.ค.'
       when(Month(LeaveDateStart))='8' then 'ส.ค.'
       when(Month(LeaveDateStart))='9' then 'ก.ย.'
       when(Month(LeaveDateStart))='10' then 'ต.ค.'
       when(Month(LeaveDateStart))='11' then 'พ.ย.'
       when(Month(LeaveDateStart))='12' then 'ธ.ค.'
       else cast(LeaveDateStart as date)
       end,'/',year(LeaveDateStart)+543) AS LeaveDateStart,
       concat(day(LeaveDateLast),'/',
       case when(Month(LeaveDateLast))='1' then 'ม.ค.'
       when(Month(LeaveDateLast))='2' then 'ก.พ.'
       when(Month(LeaveDateLast))='3' then 'มี.ค'
       when(Month(LeaveDateLast))='4' then 'เม.ย.'
       when(Month(LeaveDateLast))='5' then 'พ.ค'
       when(Month(LeaveDateLast))='6' then 'มิ.ย.'
       when(Month(LeaveDateLast))='7' then 'ก.ค.'
       when(Month(LeaveDateLast))='8' then 'ส.ค.'
       when(Month(LeaveDateLast))='9' then 'ก.ย.'
       when(Month(LeaveDateLast))='10' then 'ต.ค.'
       when(Month(LeaveDateLast))='11' then 'พ.ย.'
       when(Month(LeaveDateLast))='12' then 'ธ.ค.'
       else cast(LeaveDateLast as date)
       end,'/',year(LeaveDateLast)+543) AS LeaveDateLast FROM `leave`
    JOIN `employee` ON `leave`.`Emp_ID` = `employee`.`Emp_ID`
    JOIN `department` ON `employee`.`Dept_ID` = `department`.`Dept_ID`
    JOIN `position` ON `employee`.`Position_ID` = `position`.`Position_ID`
   JOIN `sector` ON `employee`.`Sector_ID` = `sector`.`Sector_ID`
    JOIN `leavetype` ON `leave`.`LType_ID` =`leavetype`.`LType_ID`
    JOIN `leavestatus` ON `leave`.`LeaveStatus_ID` = `leavestatus`.`LeaveStatus_ID`
    WHERE 
    `employee`.`Dept_ID` = '".$_POST["Dept_ID"]."' AND `leave`.`LeaveStatus_ID` = 6 
    AND `position`.`Role` < 2
    GROUP BY `leave`.`Emp_ID`,`leavetype`.`LType_ID`,`leave`.`Leave_ID`
    ORDER BY  `leave`.`Response_Time` DESC  ";
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