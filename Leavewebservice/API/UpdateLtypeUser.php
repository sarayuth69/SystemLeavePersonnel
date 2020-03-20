<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');

    $Emp_Model = new EmpModel;
    $Emp = $Emp_Model -> UpdateLtypeUser($_POST["LType_ID"],$_POST["LeaveTotal"]);
    echo ($_POST["LType_ID"]);
    echo ($_POST["LeaveTotal"]);
    echo json_encode($Emp);

