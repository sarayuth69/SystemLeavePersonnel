
<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model = new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Status_Work'] = $_POST['Status_Work'];
    $data['Data'] = $_POST['Data'];
    $data['Day_ID'] = $_POST['Day_ID'];



    $Emp = $Emp_Model -> Updateworktime($data);
 
    echo json_encode($Emp);


