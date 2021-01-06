<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "SELECT *,year(holiday_date)+543 AS year_show,concat(day(holiday_date),'/'
    ,case when(Month(holiday_date))='1' then 'มกราคม'
    when(Month(holiday_date))='2' then 'กุมภาพันธ์'
    when(Month(holiday_date))='3' then 'มีนาคม'
    when(Month(holiday_date))='4' then 'เมษายน'
    when(Month(holiday_date))='5' then 'พฤษภาคม'
    when(Month(holiday_date))='6' then 'มิถุนายน'
    when(Month(holiday_date))='7' then 'กรกฏาคม'
    when(Month(holiday_date))='8' then 'สิงหาคม'
    when(Month(holiday_date))='9' then 'กันยายน'
    when(Month(holiday_date))='10' then 'ตุลาคม'
    when(Month(holiday_date))='11' then 'พฤศจิกายน'
    when(Month(holiday_date))='12' then 'ธันวาคม'
    else cast(holiday_date as date)
    end,'/',year(holiday_date)+543) AS holiday_show_date from holiday WHERE year(holiday_date)+543 LIKE '%".$_GET["select_year"]."%'
    ORDER BY DATE(holiday_date)
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