<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model= new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
  
    $data['Sector_ID'] = $_POST['Sector_ID'];
    $data['SectorName'] = $_POST['SectorName'];
    

    $Emp = $Emp_Model -> InsertSector($data);
 
    echo json_encode($Emp);


    $name = $_POST['name'];
$time = date("H:i,jS F");
$num = $_POST['price'];

echo $_POST["avatar_upload"];
if(isset($_POST["avatar_upload"])){
    $verifyimg = getimagesize($_FILES['image']['tmp_name']);
print_r($verifyimg);
    if($verifyimg['mime'] == 'image/JPG') {
        // print "<pre>";
        // print_r($verifyimg);
        // print "</pre>";
        echo "Only PNG images are allowed!";
        exit;
    }    

    $uploaddir = './../../photo/3';
    $uploadfile = $uploaddir . basename($_FILES['image']['name']);
   
    if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadfile)) {
        echo "File is valid, and was successfully uploaded.<br>";
       
       
        mysqli_query($conn,"INSERT INTO total( fname, price, files,date) VALUES ('$name', '$num', '$uploadfile','$time')");

    } else {
        echo "Possible file upload attack!<br>";
    }
    
    echo '<pre>';
    echo 'info:';
   print_r($_FILES);
    print "</pre>";
}

?>