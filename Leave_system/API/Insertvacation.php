 
<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

    $sql  = "INSERT INTO `vacation` (`vacation_Emp_ID`,
    `vacation_limit_ID`,`vacation_amount`,
    `vacation_number`,`vacation_date_add`,`vacation_remark`) VALUES 
    (
   
    '".$_POST['Emp_ID']."',
    '".$_POST['limit_ID']."',
    '".$_POST['amount']."',
    '".$_POST['number']."',
    NOW(),
    '".$_POST['vacation_remark']."'
    )
    ";
     if ($conn->query($sql) === TRUE) {
      echo json_encode('success');
    } else {
    
      echo json_encode($conn->error);
    }
    