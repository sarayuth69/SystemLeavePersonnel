<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');

    $Emp_Model = new EmpModel;
    $Emp = $Emp_Model -> getLtype_EI_admin($_POST["Empstatus_ID"]);

    echo json_encode($Emp);



