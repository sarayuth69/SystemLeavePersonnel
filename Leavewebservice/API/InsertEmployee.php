<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model= new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Emp_ID'] = $_POST['Emp_ID'];
    $data['Prefix'] = $_POST['Prefix'];
    $data['EmpName'] = $_POST['EmpName'];
    $data['EmpLastName'] = $_POST['EmpLastName'];
    $data['Sex'] = $_POST['Sex'];
    $data['Birthday'] = $_POST['Birthday'];
    $data['Age'] = $_POST['Age'];
    $data['Address'] = $_POST['Address'];
    $data['Tel'] = $_POST['Tel'];
    $data['Username'] = $_POST['Username'];
    $data['Passwork'] = $_POST['Passwork'];
    $data['Work_day'] = $_POST['Work_day'];
    $data['Duration_work'] = $_POST['Duration_work'];
    $data['Empstatus_ID'] = $_POST['Empstatus_ID'];
    $data['Position_ID'] = $_POST['Position_ID'];
    $data['Dept_ID'] = $_POST['Dept_ID'];
    

    $Emp = $Emp_Model -> InsertEmployee($data);
 
    echo json_encode($Emp);