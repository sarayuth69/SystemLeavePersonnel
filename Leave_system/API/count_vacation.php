<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "SELECT COUNT(*) AS count_vacation FROM vacation WHERE 
    vacation.vacation_Emp_ID='".$_POST['vacation_Emp_ID']."'
     AND vacation.vacation_limit_ID='".$_POST['vacation_limit_ID']."'
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

