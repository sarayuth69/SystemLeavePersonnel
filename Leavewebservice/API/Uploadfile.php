<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

// ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส

$data = [];
$data['file_name'] = $_FILES['myFile']['name'];
if($_FILES){
$target_dir = "../upload/";
echo $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_file);
}
print_r($data);

 $sql = "INSERT INTO `upload` (`file_ID``file_name`) 
 VALUES ('".$data['file_ID']."','".$data['file_name']."')
 ";
      if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }