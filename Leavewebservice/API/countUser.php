<?php
 
 require 'connect_DB.php' ;


    $sql  = "SELECT
    COUNT(`employee`.`Emp_ID`) AS countUser
    FROM employee
  WHERE 1";

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
