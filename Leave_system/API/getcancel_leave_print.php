<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

  $sql  = "SELECT *,IF(`leave`.`LeaveTotal` = 0,SUM(`leave`.`LeaveTotal`+`cancel_leave`.cancel_total),`leave`.`LeaveTotal`) AS calculate_cancel FROM `leave` LEFT JOIN `cancel_leave` ON `leave`.`Leave_ID` = `cancel_leave`.`leave_ID`
  WHERE `leave`.`leave_ID` = '".$_GET[Leave_ID]."'
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