
<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model = new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['LType_ID'] = $_POST['LType_ID'];
    $data['LTypeName'] = $_POST['LTypeName'];
    $data['Number'] = $_POST['Number'];
    $data['Remain'] = $_POST['Remain'];
    $data['AdvanceNotice'] = $_POST['AdvanceNotice'];
    $data['LOrdinal'] = $_POST['LOrdinal'];
    $data['QuotaStatus'] = $_POST['QuotaStatus'];
    $data['Empstatus_ID'] = $_POST['Empstatus_ID'];

    $Emp = $Emp_Model -> Updateleavetype($data);
 
    echo json_encode($Emp);


