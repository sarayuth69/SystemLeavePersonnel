<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

     $sql = "SELECT `leave`.LeaveDateStart,`leave`.LeaveDateLast from `leave` 
    WHERE `leave`.LeaveDateStart BETWEEN  LeaveDateStart and  LeaveDateLast AND `leave`.Emp_ID  = '".$_POST["Emp_ID"]."' ";

    
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