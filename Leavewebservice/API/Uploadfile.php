<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json', true);

require_once('../Model/EmpModel.php');
$Emp_Model = new EmpModel;


// ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส

$data = [];
$data['file_name'] = $_FILES['myFile']['name'];
if($_FILES){
$target_dir = "../upload/";
echo $target_file = $target_dir . basename($_FILES["myFile"]["name"]);
move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_file);
}
print_r($data);
 $Emp = $Emp_Model -> upload($data);



?>
