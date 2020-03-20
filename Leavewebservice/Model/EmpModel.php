<?php
require_once("BaseModel.php");
class EmpModel extends BaseModel{
    
     
    function __construct(){
        if(!static::$db){
            static::$db = mysqli_connect($this->host, $this->username, $this->password, $this->db_name);
            mysqli_set_charset(static::$db,"utf8");
        }
    }

function pdf($name){
    require_once __DIR__ . '/vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf([
	'default_font_size' => 16,
	'default_font' => 'sarabun'
]);
$mpdf->WriteHTML($name);
$mpdf->Output();
}
    
function getEmployee(){

        $sql  = "SELECT
         * FROM employee
 LEFT JOIN position ON employee.Position_ID = position.Position_ID
 LEFT JOIN department ON employee.Dept_ID = department.Dept_ID
 LEFT JOIN employeestatus ON employee.Empstatus_ID = employeestatus.Empstatus_ID
 LEFT JOIN officiate_day ON employee.Emp_ID = officiate_day.Emp_ID
 WHERE 1
  GROUP BY `employee`.`Emp_ID`
 ORDER BY ABS(`employee`.`Emp_ID`) ASC
";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

    function getEmployee_daywork(){

        $sql  = "SELECT * FROM `employee` WHERE 1";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    
    function getleave($Emp_ID){
        $sql  = "SELECT
        *
    FROM  
        `leave`
    JOIN `employee` ON `leave`.`Emp_ID` = `employee`.`Emp_ID`
    JOIN `department`ON `employee`.`Dept_ID` = `department`.`Dept_ID`
    JOIN `leavetype` ON `leave`.`LType_ID` = `leavetype`.`LType_ID`
    WHERE  
    leave.Emp_ID = '$Emp_ID'
    ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

    function getLtype($Empstatus_ID){
        $sql  = "SELECT
        *
    FROM
        `leavetype` JOIN `employeestatus` ON `leavetype`.`Empstatus_ID` = `employeestatus`.`Empstatus_ID`
    WHERE  leavetype.Empstatus_ID = '$Empstatus_ID'
    ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    function getLtypeUser($LType_ID,$Emp_ID){
        $sql  = "SELECT
        *,SUM(`leavetype`.`Remain`)-(`leave`.`LeaveTotal`) AS NumberRemain
    FROM
        `leavetype` 
        JOIN `employeestatus` ON `leavetype`.`Empstatus_ID` = `employeestatus`.`Empstatus_ID`
        JOIN `leave` ON  `leavetype`.`LType_ID` = `leave`.`LType_ID`
    WHERE  
    `leavetype`.`LType_ID`='$LType_ID'
    ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    function getleavetoperson(){
        $sql  = 'SELECT
        *
    FROM
        `leave`
    JOIN `employee` ON `leave`.`Emp_ID` = `employee`.`Emp_ID`
    JOIN `department` ON `employee`.`Dept_ID` = `department`.`Dept_ID`
    WHERE
        1';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

    function getDept(){
        $sql  = 'SELECT * FROM `department` JOIN `sector` ON `department`.`Sector_ID` = `sector`.`Sector_ID`
        WHERE 1';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

    function getLeavetype(){
        $sql  = 'SELECT * FROM leavetype JOIN employeestatus ON
        leavetype.Empstatus_ID = employeestatus.Empstatus_ID WHERE 1 ORDER BY leavetype.LType_ID';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    // ไม่ได้ใช้ฟังชั่นนี่แล้ว
    // function getLtype_Of(){
    //     $sql  = 'SELECT * FROM `leavetype` JOIN `employeestatus`ON `leavetype`.`Empstatus_ID`= `employeestatus`.`Empstatus_ID`
    //     WHERE leavetype.Empstatus_ID= 106 ';
    //     // echo "<pre>";
    //     // print_r($sql);
    //     // echo "</pre>";
    //     if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
    //         $data = [];
    //         while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    //             $data[] = $row;
    //         }
    //         $result->close();
    //         return $data;
    //     }
    // }
     // ไม่ได้ใช้ฟังชั่นนี่แล้ว
    // function getLtype_US(){
    //     $sql  = 'SELECT * FROM `leavetype` JOIN `employeestatus`ON `leavetype`.`Empstatus_ID`= `employeestatus`.`Empstatus_ID`
    //      WHERE leavetype.Empstatus_ID= 105';
    //     // echo "<pre>";
    //     // print_r($sql);
    //     // echo "</pre>";
    //     if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
    //         $data = [];
    //         while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    //             $data[] = $row;
    //         }
    //         $result->close();
    //         return $data;
    //     }
    // }
     // ไม่ได้ใช้ฟังชั่นนี่แล้ว
    // function getLtype_EI($Empstatus_ID){
    //     $sql  = "SELECT * FROM `leavetype` JOIN `employeestatus`ON `leavetype`.`Empstatus_ID`= `employeestatus`.`Empstatus_ID`
    //      WHERE leavetype.Empstatus_ID= '$Empstatus_ID'";
    //     // echo "<pre>";
    //     // print_r($sql);
    //     // echo "</pre>";
    //     if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
    //         $data = [];
    //         while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    //             $data[] = $row;
    //         }
    //         $result->close();
    //         return $data;
    //     }
    // }

    function getLtype_EI_admin($Emp){
        $sql  = "SELECT * FROM `leavetype` JOIN `employeestatus` ON 
        `leavetype`.`Empstatus_ID`= `employeestatus`.`Empstatus_ID`
        WHERE 
        `leavetype`.`Empstatus_ID`='$Emp'";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

    // function getLtype_US_admin(){
    //     $sql  = 'SELECT * FROM `leavetype` JOIN `employeestatus` ON 
    //     `leavetype`.`Empstatus_ID`= `employeestatus`.`Empstatus_ID`
    //     WHERE 
    //     `leavetype`.`Empstatus_ID`=105';
    //     // echo "<pre>";
    //     // print_r($sql);
    //     // echo "</pre>";
    //     if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
    //         $data = [];
    //         while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    //             $data[] = $row;
    //         }
    //         $result->close();
    //         return $data;
    //     }
    // }
    

    function getStatus(){

        $sql  = 'SELECT * FROM `employeestatus` WHERE 1';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    
    function getposition(){

        $sql  = 'SELECT * FROM `position` WHERE 1 ORDER BY ABS(`position`.`Position_ID`) ASC';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    function getsector(){

        $sql  = 'SELECT * FROM `sector`';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
// อาจจะไม่ได้ใช้
    function getDept1001(){

        $sql  = 'SELECT
                        *
                
            FROM
                employee
            LEFT JOIN position ON employee.Position_ID = position.Position_ID
            LEFT JOIN department ON employee.Dept_ID = department.Dept_ID
            LEFT JOIN employeestatus ON employee.Empstatus_ID = employeestatus.Empstatus_ID
            WHERE `employee`.`Dept_ID` = 1005
            GROUP BY employee.Emp_ID';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

//    

function getDept_To_head($Dept_ID){

    $sql  = "SELECT
    * FROM employee
LEFT JOIN position ON employee.Position_ID = position.Position_ID
LEFT JOIN department ON employee.Dept_ID = department.Dept_ID
LEFT JOIN employeestatus ON employee.Empstatus_ID = employeestatus.Empstatus_ID
LEFT JOIN officiate_day ON employee.Emp_ID = officiate_day.Emp_ID
WHERE `employee`.`Dept_ID` = '$Dept_ID'
GROUP BY `employee`.`Emp_ID`
ORDER BY ABS(`employee`.`Emp_ID`) ASC";
    // echo "<pre>";
    // print_r($sql);
    // echo "</pre>";
    if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
        $data = [];
        while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
            $data[] = $row;
        }
        $result->close();
        return $data;
    }
}

    function DeleteDept($Dept_ID){

        $sql  = "DELETE FROM `department` WHERE `department`.`Dept_ID` = '$Dept_ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return mysqli_insert_id(static::$db);
        }else {
            return 0;
        }
    }

    function Deletesector($Sector_ID){

        $sql  = "DELETE FROM `sector` WHERE `sector`.`Sector_ID` = '$Sector_ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return mysqli_insert_id(static::$db);
        }else {
            return 0;
        }
    }

    function DeletePosition($Position_ID){

        $sql  = "DELETE FROM `position` WHERE `position`.`Position_ID` = '$Position_ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return mysqli_insert_id(static::$db);
        }else {
            return 0;
        }
    }

    function Deletestatus($Empstatus_ID){

        $sql  = "DELETE FROM `employeestatus` WHERE `employeestatus`.`Empstatus_ID` = '$Empstatus_ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return mysqli_insert_id(static::$db);
        }else {
            return 0;
        }
    }

    function Deleteleavetype($LType_ID){

        $sql  = "DELETE FROM `leavetype` WHERE `leavetype`.`LType_ID` = '$LType_ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return mysqli_insert_id(static::$db);
        }else {
            return 0;
        }
    }
   
    
    function DeleteEmp($Emp_ID){

        $sql  = "DELETE FROM `employee` WHERE `employee`.`Emp_ID` = '$Emp_ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return mysqli_insert_id(static::$db);
        }else {
            return 0;
        }
    }

    function InsertDept($data = []){

        $sql  = "INSERT INTO `department` (`Dept_ID`, `DeptName`,`Sector_ID`) VALUES 
        (

        '".$data['Dept_ID']."',
        '".$data['DeptName']."',
        '".$data['Sector_ID']."'
        )
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function InsertSector($data = []){

        $sql  = "INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES 
        (

        '".$data['Sector_ID']."',
        '".$data['SectorName']."'
        )
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function InsertPosition($data = []){
      
        $sql  = "INSERT INTO `position` (`Position_ID`, `PositionName`,`Role`) VALUES 
        (

        '".$data['Position_ID']."',
        '".$data['PositionName']."',
        '".$data['Role']."'
        )
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }


    function InsertEmpStatus($data = []){

        $sql  = "INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES 
        (

        '".$data['Empstatus_ID']."',
        '".$data['EmpstatusName']."'
        )
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }
    

    function InsertEmployee($data = []){

        $sql  = "INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, 
        `Birthday`, `Age`, `Address`, `Tel`,`Username`,`Password`, `Work_day`, `Duration_work`, `Empstatus_ID`, `Position_ID`
        , `Dept_ID`) VALUES
         (
        '".$data['Emp_ID']."',
        '".$data['Prefix']."',
        '".$data['EmpName']."',
        '".$data['EmpLastName']."',
        '".$data['Sex']."',
        '".$data['Birthday']."',
        '".$data['Age']."',
        '".$data['Address']."',
        '".$data['Tel']."',
        '".$data['Username']."',
        '".$data['Password']."',
        '".$data['Work_day']."',
        '".$data['Duration_work']."',
        '".$data['Empstatus_ID']."',
        '".$data['Position_ID']."',
        '".$data['Dept_ID']."'
       
        )
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function Addworktime($data = []){

        $sql  = "INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`,`Emp_ID`,`Data`) VALUES 
        (

        '".$data['Day_Work']."',
        '".$data['Status_Work']."',
        '".$data['Emp_ID']."',
        '".$data['Data']."'
        )
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }


    function Add_Leave($data = []){

        $sql  = "INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`,`To_Person`,`LeaveDateStart`, `LeaveDateLast`, 
        `LeaveData`, `ContactInformation`, `LeaveTotal`, `LeaveStatus`, `Response_Time`, `Person_Code_Allow`,`LType_ID`) 
          VALUES
         (
        '".$data['Leave_ID']."',
        '".$data['Emp_ID']."',
        '".$data['Name_Leave']."',
        '".$data['To_Person']."',
        '".$data['LeaveDateStart']."',
        '".$data['LeaveDateLast']."',
        '".$data['LeaveData']."',
        '".$data['ContactInformation']."',
        '".$data['LeaveTotal']."',
        '".$data['LeaveStatus']."',
        '".$data['Response_Time']."',
        '".$data['Person_Code_Allow']."',
        '".$data['LType_ID']."'
        )
        
        "; 
       // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }
    
    function UpdateLtypeUser($LType_ID,$LeaveTotal){

        $sql  = "UPDATE
        `leavetype`
        JOIN `leave` ON `leavetype`.`LType_ID` = `leave`.`LType_ID`
    SET
        `leavetype`.`Remain` = (SELECT `leavetype`.`Remain` WHERE `leavetype`.`LType_ID` = '$LType_ID') - '$LeaveTotal'
    WHERE
         `leavetype`.`LType_ID` = '$LType_ID'
    
         
        
        "; 
       // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function InsertLeavetype($data = []){

        $sql  = "INSERT INTO `leavetype` (`LType_ID`,`LTypeName`,`Number`,`Remain`,`AdvanceNotice`,`LOrdinal`, `QuotaStatus`, `Empstatus_ID` ) VALUES ('".$data['LType_ID']."','".$data['LTypeName']."','".$data['Number']."','".$data['Remain']."','".$data['AdvanceNotice']."','".$data['LOrdinal']."','".$data['QuotaStatus']."','".$data['Empstatus_ID']."')";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function UpdateDept($data) {
      
        $sql = "UPDATE `department` SET `Dept_ID`='".$data['Dept_ID']."',`DeptName`='".$data['DeptName']."' 
        ,`Sector_ID`='".$data['Sector_ID']."'
        WHERE  `department`.`Dept_ID` = '".$data['Dept_ID']."'
        
        ";
        
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function UpdateSector($data) {
      
        $sql = "UPDATE `sector` SET `Sector_ID`='".$data['Sector_ID']."',`SectorName`='".$data['SectorName']."' 
        WHERE  `sector`.`Sector_ID` = '".$data['Sector_ID']."'
        
        ";
        
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }


    function UpdateStatus($data) {
      
        $sql = "UPDATE `employeestatus` SET `Empstatus_ID`='".$data['Empstatus_ID']."',`EmpstatusName`='".$data['EmpstatusName']."' 
        WHERE  `employeestatus`.`Empstatus_ID` = '".$data['Empstatus_ID']."'
        
        ";
        
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

   
    function UpdatePosition($data) {
      
        $sql = "UPDATE `position` SET `Position_ID` = '".$data['Position_ID']."', `PositionName` = '".$data['PositionName']."',
         `Role` = '".$data['Role']."'
         WHERE `position`.`Position_ID` = '".$data['Position_ID']."';
        ";
        
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function UpdateEmployee($data) {
      
        $sql = "UPDATE `employee` SET `Emp_ID`='".$data['Emp_ID']."',`EmpName`='".$data['EmpName']."'
        ,`EmpLastName`='".$data['EmpLastName']."',`Sex`='".$data['Sex']."',`Birthday`='".$data['Birthday']."'
        ,`Age`='".$data['Age']."',`Address`='".$data['Address']."',`Tel`='".$data['Tel']."'
        ,`Work_day`='".$data['Work_day']."',`Duration_work`='".$data['Duration_work']."'
        ,`Empstatus_ID`='".$data['Empstatus_ID']."',`Position_ID`='".$data['Position_ID']."'
        ,`Dept_ID`='".$data['Dept_ID']."'
        WHERE  `employee`.`Emp_ID` = '".$data['Emp_ID']."'
        
        ";
        
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function Updateleavetype($data) {
      
        $sql = "UPDATE `leavetype` SET `LType_ID`='".$data['LType_ID']."',`LTypeName`='".$data['LTypeName']."'
        ,`Number`='".$data['Number']."',`Remain`='".$data['Remain']."',`AdvanceNotice`='".$data['AdvanceNotice']."'
        ,`LOrdinal`='".$data['LOrdinal']."',`QuotaStatus`='".$data['QuotaStatus']."',`Empstatus_ID`='".$data['Empstatus_ID']."'
        WHERE  `leavetype`.`LType_ID` = '".$data['LType_ID']."'
        
        ";
        
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function UpdatesetLOrdinal($LType_ID) {
      
        $sql = "UPDATE
        `leavetype`
    SET
        `LOrdinal` = (SELECT LOrdinal WHERE LType_ID = '$LType_ID') + 1
    WHERE
         LType_ID = '$LType_ID'
        ";
        
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }


    function search($Emp_ID){
        $sql = "SELECT
        *
    FROM
    employee
    LEFT JOIN position ON employee.Position_ID = position.Position_ID
    LEFT JOIN department ON employee.Dept_ID = department.Dept_ID
    LEFT JOIN employeestatus ON employee.Empstatus_ID = employeestatus.Empstatus_ID
    WHERE
    Emp_ID LIKE '%$Emp_ID%' OR EmpName LIKE '%$Emp_ID%' 
        OR EmpLastName LIKE '%$Emp_ID%'
         ";
             if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
                $data = [];
                while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                    $data[] = $row;
                }
                $result->close();
                return $data;
            }
      }


    function Login($data) {
      
        $sql = "SELECT
        *
    FROM
    `employee` JOIN `position`
     ON
    `employee`.`Position_ID` = `position`.`Position_ID`
    JOIN
    `department`
    ON
    `employee`.`Dept_ID`=`department`.`Dept_ID`
    JOIN
    `sector`
    ON
    `employee`.`Sector_ID`=`sector`.`Sector_ID`
    WHERE
        employee.Username = '".$data['Username']."' AND employee.Password = '".$data['Password']."'
        ";
      if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
        $data = [];
        while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
            $data[] = $row;
        }
        $result->close();
        return $data;
    }
    }

}
