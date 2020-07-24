<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


    $sql = "SELECT
    *
FROM
employee
LEFT JOIN officiate_day ON employee.Emp_ID = officiate_day.Emp_ID
WHERE
 Day_Work LIKE '%{$_GET['Day_Work']}%' 
 
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