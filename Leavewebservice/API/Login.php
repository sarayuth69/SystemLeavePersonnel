
<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model = new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Username'] = $_POST['Username'];
    $data['Passwork'] = $_POST['Passwork'];


    $Emp = $Emp_Model -> Login($data);
 
    echo json_encode($Emp);


