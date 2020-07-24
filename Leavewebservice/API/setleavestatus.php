<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql = "UPDATE `leave` SET `Leave_ID`='".$_POST['Leave_ID']."',`LeaveStatus_ID`='".$_POST['LeaveStatus_ID']."'
    WHERE  `leave`.`Leave_ID` = '".$_POST['Leave_ID']."'";
    
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