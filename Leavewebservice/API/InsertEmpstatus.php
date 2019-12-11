<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model= new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Empstatus_ID'] = $_POST['Empstatus_ID'];
    $data['EmpstatusName'] = $_POST['EmpstatusName'];
    

    $Emp = $Emp_Model -> InsertEmpStatus($data);
 
    echo json_encode($Emp);