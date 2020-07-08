<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');

    $Emp_Model = new EmpModel;
    $Emp = $Emp_Model -> getleavetype_Temporary_worker();

    echo json_encode($Emp);



