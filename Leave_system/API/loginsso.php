<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


 $SSO = json_decode(\file_get_contents('../../QR_Student/sso/catchJson/'.$_GET['perid'].'.json'));
     \unlink('../../QR_Student/sso/catchJson/' . $_GET['perid'] . '.json');
 $SSO_1 = json_encode($SSO);

// if(isset($SSO->firstNameThai[0])==""){
//     echo"";
// }
// else{
//   if (isset($SSO->prename[0])=="นาย"){
//     $sex = "ชาย";
//   }
//   if (isset($SSO->prename[0])=="นาง" || isset($SSO->prename[0])=="นางสาว" ){
//     $sex = "หญิง";
//   }
if(isset($SSO)){
    $sql  = "INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, 
    `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`,
    `Username`,`Password`, `Work_day`,`Duration_work`, `status_data`,
    `Empstatus_ID`, `Position_ID`, `Dept_ID`) VALUES 
    (
    '".$SSO->uid[0]."',
    '".$SSO->prename[0]."',
    '".$SSO->firstNameThai[0]."',
    '".$SSO->lastNameThai[0]."',
    '',
    '".$SSO->personalId[0]."',
    '".$SSO->campus[0]."',
    '',
    '',
    '',
    NOW(),
    '',
    'W',
    '',
    '',
    ''
    )
    ON DUPLICATE KEY UPDATE
    Emp_ID ='" . $SSO->uid[0] . "',
    Prefix='".$SSO->prename[0]."',
    EmpName= '".$SSO->firstNameThai[0]."',
    EmpLastName='".$SSO->lastNameThai[0]."'
    ";
    if ($conn->query($sql) === TRUE) {
        echo $SSO_1;
     } else {
        echo json_encode($conn->error);
     }
}
else{
    echo "error";
}
    
   
// }
 