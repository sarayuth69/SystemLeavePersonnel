<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;
    $sql  = "SELECT
    *
     FROM employee
LEFT JOIN position ON employee.Position_ID = position.Position_ID
LEFT JOIN department ON employee.Dept_ID = department.Dept_ID
LEFT JOIN employeestatus ON employee.Empstatus_ID = employeestatus.Empstatus_ID
WHERE employee.status_data = 'Y' AND employee.Emp_ID= '".$_GET['Emp_ID']."'
GROUP BY `employee`.`Emp_ID`
ORDER BY ABS(`employee`.`Emp_ID`) ASC
";
$result = mysqli_query($conn,$sql); 
$myArray = array();
if ($result->num_rows > 0) {
// output data of each row
    while($row = $result->fetch_assoc()) {
        $myArray[] = $row;
    }
    print json_encode($myArray);
} 
else 
{
    echo "0 results";
}
