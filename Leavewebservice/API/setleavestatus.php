
<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model = new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Leave_ID'] = $_POST['Leave_ID'];
    $data['LeaveStatus_ID'] = $_POST['LeaveStatus_ID'];
    $Emp = $Emp_Model -> setleavestatus($data);
 
    echo json_encode($Emp);