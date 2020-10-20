<?php
 require 'connect_DB.php' ;

 $sql  = "SELECT *, ADDDATE(Date_start,INTERVAL limit_date MONTH)as date_stop FROM `leave_limit` ";
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