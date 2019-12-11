<?php
abstract class BaseModel{

    public static $db;
    protected $host="localhost";
    protected $username="root";
    protected $password="root12345";
    protected $db_name="table_leavesystem";
    function __construct(){
        static::$db = mysqli_connect($host, $username, $password, $db_name);
        if (mysqli_connect_errno())
        {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();

        }
    }
}

