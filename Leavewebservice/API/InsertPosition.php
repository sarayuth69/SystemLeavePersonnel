<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model= new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Position_ID'] = $_POST['Position_ID'];
    $data['PositionName'] = $_POST['PositionName'];
    

    $Emp = $Emp_Model -> InsertPosition($data);
 
    echo json_encode($Emp);