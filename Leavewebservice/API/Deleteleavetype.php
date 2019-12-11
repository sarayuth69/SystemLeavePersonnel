<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model = new EmpModel;
    

echo $_GET["LType_ID"];
    $Emp = $Emp_Model -> Deleteleavetype($_GET["LType_ID"]);
 
    echo json_encode($Emp);


