<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

// ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส



 for ($i = 0; $i < count($_FILES["myFile"]["name"]); $i++) {
  if(isset($_FILES['myFile'])){
    $target_dir = '../upload/' ;
    $target_file = $target_dir .time().  basename($_FILES["myFile"]["name"]);
     // echo $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
    move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_file);
    }
     $sql = "INSERT  `file_upload` (`file_ID` ,`Leave_ID`,`file_name` ) VALUES (
       '".$_POST['file_ID']."',
       '".$_POST['Leave_ID']."',
       '".$target_file."'
     )
     ";
          if ($conn->query($sql) === TRUE) {
            echo json_encode('success');
          } else {
            echo json_encode($conn->error);
          }
   }



