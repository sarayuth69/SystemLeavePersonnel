<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model = new EmpModel;
    

echo $_GET["Dept_ID"];
    $Emp = $Emp_Model -> DeleteDept($_GET["Dept_ID"]);
 
    echo json_encode($Emp);


