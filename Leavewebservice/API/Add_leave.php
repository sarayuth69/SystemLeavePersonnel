<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model= new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Leave_ID'] = $_POST['Leave_ID'];
    $data['Emp_ID'] = $_POST['Emp_ID'];
    $data['Name_Leave'] = $_POST['Name_Leave'];
    $data['To_Person'] = $_POST['To_Person'];
    $data['LeaveDateStart'] = $_POST['LeaveDateStart'];
    $data['LeaveDateLast'] = $_POST['LeaveDateLast'];
    $data['LeaveData'] = $_POST['LeaveData'];
    $data['ContactInformation'] = $_POST['ContactInformation'];
    $data['LeaveTotal'] = $_POST['LeaveTotal'];
    $data['LeaveStatus'] = $_POST['LeaveStatus'];
    $data['Response_Time'] = $_POST['Response_Time'];
    $data['Person_Code_Allow'] = $_POST['Person_Code_Allow'];
    $data['upload_file'] = $_POST['upload_file'];
    $data['LType_ID'] = $_POST['LType_ID'];
    

    $Emp = $Emp_Model -> Add_Leave($data);
 
    echo json_encode($Emp);