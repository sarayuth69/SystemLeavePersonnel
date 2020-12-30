<?php

 require 'connect_DB.php' ;

// ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส

// $_POST['file_names'] = $_FILES['myFile']['name'];
if(isset($_FILES['myFile'])){
$target_dir = '../upload/' ;
$target_file = $target_dir .time(). basename($_FILES["myFile"]["name"]);
 // echo $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_file);
}

 

 $sql = "INSERT  `upload` (`file_ID` ,`file_data`,`file_names` ) VALUES (
   '".$_POST['file_ID']."',
   '".$_POST['file_data']."',
   '".$target_file."'
 )
 ";

      if ($conn->query($sql) === TRUE) {
        echo json_encode('success');
      } else {
      
        echo json_encode($conn->error);
      }