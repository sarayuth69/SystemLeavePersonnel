
<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model = new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['Dept_ID'] = $_POST['Dept_ID'];
    $data['DeptName'] = $_POST['DeptName'];
    $data['Sector'] = $_POST['Sector'];


    $Emp = $Emp_Model -> UpdateDept($data);
 
    echo json_encode($Emp);


