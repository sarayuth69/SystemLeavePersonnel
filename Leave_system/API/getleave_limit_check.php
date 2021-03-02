<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 $sql  = "SELECT
  *,concat(day(Date_start),'/',
  case when(Month(Date_start))='1' then 'ม.ค.'
     when(Month(Date_start))='2' then 'ก.พ.'
     when(Month(Date_start))='3' then 'มี.ค'
     when(Month(Date_start))='4' then 'เม.ย.'
     when(Month(Date_start))='5' then 'พ.ค'
     when(Month(Date_start))='6' then 'มิ.ย.'
     when(Month(Date_start))='7' then 'ก.ค.'
     when(Month(Date_start))='8' then 'ส.ค.'
     when(Month(Date_start))='9' then 'ก.ย.'
     when(Month(Date_start))='10' then 'ต.ค.'
     when(Month(Date_start))='11' then 'พ.ย.'
     when(Month(Date_start))='12' then 'ธ.ค.'
     else cast(Date_start as date)
     end,'/',year(Date_start)+543) AS Date_start_format,
     concat(day(Date_stop),'/',
     case when(Month(Date_stop))='1' then 'ม.ค.'
     when(Month(Date_stop))='2' then 'ก.พ.'
     when(Month(Date_stop))='3' then 'มี.ค'
     when(Month(Date_stop))='4' then 'เม.ย.'
     when(Month(Date_stop))='5' then 'พ.ค'
     when(Month(Date_stop))='6' then 'มิ.ย.'
     when(Month(Date_stop))='7' then 'ก.ค.'
     when(Month(Date_stop))='8' then 'ส.ค.'
     when(Month(Date_stop))='9' then 'ก.ย.'
     when(Month(Date_stop))='10' then 'ต.ค.'
     when(Month(Date_stop))='11' then 'พ.ย.'
     when(Month(Date_stop))='12' then 'ธ.ค.'
     else cast(Date_stop as date)
     end,'/',year(Date_stop)+543) AS Date_stop_format
    FROM leave_limit where 
    leave_limit.limit_ID ='".$_GET['limit_ID']."'";
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