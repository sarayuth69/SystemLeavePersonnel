<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/EmpModel.php');
    $Emp_Model= new EmpModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
  
    $data['Sector_ID'] = $_POST['Sector_ID'];
    $data['SectorName'] = $_POST['SectorName'];
    

    $Emp = $Emp_Model -> InsertSector($data);
 
    echo json_encode($Emp);