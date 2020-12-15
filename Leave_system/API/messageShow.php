<?php

require 'connect_DB.php' ;

    $sql = "SELECT COUNT(*)AS count_data FROM officiate_day WHERE Emp_ID = '".$_POST['Emp_ID']."'  AND Status_Work = 'ไม่มาทำงาน' AND message = 0";
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