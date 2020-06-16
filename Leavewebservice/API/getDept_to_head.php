<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');

    $Emp_Model = new EmpModel;
    $Emp = $Emp_Model -> getDept_To_head($_POST["Dept_ID"],$_POST["Role"]);

    echo json_encode($Emp);



