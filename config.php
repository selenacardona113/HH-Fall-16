<?php
$host = "localhost";
$dbuser = "nachwael";
$dbpassword = "123jesuisuneFille";
$dbname ="nachwael_hackholyoke";

// Create connection
$conn = new mysqli($localhost, $dbuser, $dbpassword, $dbname);
if ($mysqli->connect_errno) {
    echo "Connection Failed (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} 
?>