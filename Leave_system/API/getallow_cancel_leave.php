<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 $sql  = "SELECT
 *,concat(day(cancel_date_start),'/',
 case when(Month(cancel_date_start))='1' then 'ม.ค.'
    when(Month(cancel_date_start))='2' then 'ก.พ.'
    when(Month(cancel_date_start))='3' then 'มี.ค'
    when(Month(cancel_date_start))='4' then 'เม.ย.'
    when(Month(cancel_date_start))='5' then 'พ.ค'
    when(Month(cancel_date_start))='6' then 'มิ.ย.'
    when(Month(cancel_date_start))='7' then 'ก.ค.'
    when(Month(cancel_date_start))='8' then 'ส.ค.'
    when(Month(cancel_date_start))='9' then 'ก.ย.'
    when(Month(cancel_date_start))='10' then 'ต.ค.'
    when(Month(cancel_date_start))='11' then 'พ.ย.'
    when(Month(cancel_date_start))='12' then 'ธ.ค.'
    else cast(cancel_date_start as date)
    end,'/',year(cancel_date_start)+543) AS cancel_date_start,
    concat(day(cancel_date_stop),'/',
    case when(Month(cancel_date_stop))='1' then 'ม.ค.'
    when(Month(cancel_date_stop))='2' then 'ก.พ.'
    when(Month(cancel_date_stop))='3' then 'มี.ค'
    when(Month(cancel_date_stop))='4' then 'เม.ย.'
    when(Month(cancel_date_stop))='5' then 'พ.ค'
    when(Month(cancel_date_stop))='6' then 'มิ.ย.'
    when(Month(cancel_date_stop))='7' then 'ก.ค.'
    when(Month(cancel_date_stop))='8' then 'ส.ค.'
    when(Month(cancel_date_stop))='9' then 'ก.ย.'
    when(Month(cancel_date_stop))='10' then 'ต.ค.'
    when(Month(cancel_date_stop))='11' then 'พ.ย.'
    when(Month(cancel_date_stop))='12' then 'ธ.ค.'
    else cast(cancel_date_stop as date)
    end,'/',year(cancel_date_stop)+543) AS cancel_date_stop
FROM  
 `leave`
JOIN `employee` ON `leave`.`Emp_ID` = `employee`.`Emp_ID`
JOIN `department`ON `employee`.`Dept_ID` = `department`.`Dept_ID`
JOIN `leavetype` ON `leave`.`LType_ID` = `leavetype`.`LType_ID`
JOIN `leavestatus` ON `leave`.`LeaveStatus_ID` = `leavestatus`.`LeaveStatus_ID`
JOIN  `cancel_leave` ON `leave`.`leave_ID` = `cancel_leave`.leave_ID
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