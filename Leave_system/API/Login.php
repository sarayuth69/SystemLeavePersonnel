 
<?php
 header("Access-Control-Allow-Origin: *");
 header('Control-type: application/json',true);
 require 'connect_DB.php' ;

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
JOIN
`employeestatus`
ON
`employee`.`Empstatus_ID` = `employeestatus`.`Empstatus_ID`
WHERE
employee.Emp_ID = '".$_POST['Emp_ID']."' AND status_data = 'Y'
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