<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 $sql = "SELECT *
        FROM `employee`
       LEFT JOIN `leave` ON `employee`.`Emp_ID` = `leave`.`Emp_ID`
       LEFT JOIN `leavetype` ON `leave`.`LType_ID` = `leavetype`.`LType_ID`
        WHERE `leave`.LeaveDateStart LIKE '%{$_GET['Day_leave']}%'
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