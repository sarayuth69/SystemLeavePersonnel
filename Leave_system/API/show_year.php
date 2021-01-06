<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
 $select_year = $_GET["select_year"];
    $sql  = "SELECT year(holiday_date)+543 AS year_show from holiday 
    WHERE 1
    GROUP BY year(holiday_date)
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