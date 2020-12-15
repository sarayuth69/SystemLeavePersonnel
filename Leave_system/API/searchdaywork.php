<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

$day_work = $_GET['Day_Work'];
    $sql = "SELECT
    *
FROM
employee
LEFT JOIN officiate_day ON employee.Emp_ID = officiate_day.Emp_ID
WHERE
 DATE(Day_Work) = DATE('$day_work') 
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
          echo $day_work;
      }