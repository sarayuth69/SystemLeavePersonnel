<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model = new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Username'] = $_POST['Username'];
    $data['Password'] = $_POST['Password'];


    $Emp = $Emp_Model -> Login1($data);
 
    echo json_encode($Emp);


