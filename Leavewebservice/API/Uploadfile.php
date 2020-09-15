<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

// ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส


$_POST['file_name'] = $_FILES['myFile']['name'];
if($_FILES){
$target_dir = '../upload/' ;
echo $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_file);
}
print_r($data);

 $sql = "UPDATE INTO `leave` (`file_names` = '".$_POST['file_names']."' ) where `leave`.`Leave_ID` = '".$_POST['Leave_ID']."'
 ";
      if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }