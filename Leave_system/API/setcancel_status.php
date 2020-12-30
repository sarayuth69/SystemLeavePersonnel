<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

 if($_POST['cancel_status'] == 9){
    $sql = "UPDATE `cancel_leave` SET `cancel_id`='".$_POST['cancel_id']."',`cancel_status`='".$_POST['cancel_status']."'
    WHERE  `cancel_leave`.`cancel_id` = '".$_POST['cancel_id']."'";
    
 }
 else if($_POST['cancel_status'] == 8){
    $sql = "UPDATE `cancel_leave` SET `cancel_id`='".$_POST['cancel_id']."',`cancel_status`='".$_POST['cancel_status']."'
    WHERE  `cancel_leave`.`cancel_id` = '".$_POST['cancel_id']."'";
 }
  
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