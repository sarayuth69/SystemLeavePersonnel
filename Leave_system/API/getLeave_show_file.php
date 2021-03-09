<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 $sql  = "SELECT file_name
 FROM `employee`
 JOIN `leave` ON `employee`.`Emp_ID` = `leave`.`Emp_ID`
 JOIN `file_upload` ON `leave`.`Leave_ID` = `file_upload`.Leave_ID
WHERE  
file_upload.Leave_ID = '".$_GET['Leave_ID']."' 
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