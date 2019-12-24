<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model= new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Day_Work'] = $_POST['Day_Work'];
    $data['Status_Work'] = $_POST['Status_Work'];
    $data['Emp_ID'] = $_POST['Emp_ID'];

    

    $Emp = $Emp_Model -> Addworktime($data);
 
    echo json_encode($Emp);