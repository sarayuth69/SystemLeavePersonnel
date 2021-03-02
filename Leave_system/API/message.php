<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
require 'connect_DB.php' ;

    $sql = "SELECT *,
    concat(day(Day_Work),'/',
    case when(Month(Day_Work))='1' then 'มกราคม'
    when(Month(Day_Work))='2' then 'กุมภาพันธ์'
    when(Month(Day_Work))='3' then 'มีนาคม'
    when(Month(Day_Work))='4' then 'เมษายน'
    when(Month(Day_Work))='5' then 'พฤษภาคม'
    when(Month(Day_Work))='6' then 'มิถุนายน'
    when(Month(Day_Work))='7' then 'กรกฏาคม'
    when(Month(Day_Work))='8' then 'สิงหาคม'
    when(Month(Day_Work))='9' then 'กันยายน'
    when(Month(Day_Work))='10' then 'ตุลาคม'
    when(Month(Day_Work))='11' then 'พฤศจิกายน'
    when(Month(Day_Work))='12' then 'ธันวาคม'
    else cast(Day_Work as date)
    end,'/',year(Day_Work)+543) AS Day_Work
     FROM officiate_day WHERE Emp_ID = '".$_POST['Emp_ID']."'  AND Status_Work = 'ไม่มาทำงาน' AND LENGTH(officiate_day.`Data`) = 0
     ORDER BY day(Day_Work) DESC
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