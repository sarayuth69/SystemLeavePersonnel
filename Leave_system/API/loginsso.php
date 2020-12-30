<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;


 $SSO = json_decode(\file_get_contents('../../QR_Student/sso/catchJson/'.$_GET['perid'].'.json'));
   \unlink('../../QR_Student/sso/catchJson/' . $_GET['perid'] . '.json');
 $SSO_1 = json_encode($SSO);
echo $SSO_1;
 echo $SSO->firstNameThai[0] ;

//  firstNameThai
if(isset($SSO->firstNameThai[0])==""){
    echo"logout";
}
else{
    $sql  = "INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES 
    (
    '".$SSO->uidNumber[0]."',
    '".$SSO->firstNameThai[0]."'
    )
    ON DUPLICATE KEY UPDATE
    Sector_ID ='" . $SSO->uidNumber[0] . "',
    SectorName ='" . $SSO->firstNameThai[0] . "'
                 
    ";
    if ($conn->query($sql) === TRUE) {
       echo "successfully";
     } else {
       echo "Error: " . $sql . "<br>" . $conn->error;
     }
   
}
 