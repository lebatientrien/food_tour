<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database credentials
$servername = "localhost";
$username = "petit568";
$password = "Trien825590";
$dbname = "petit568_dat";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Get the parameters from the URL
$null_data = $_GET['null_data'] ?? null;

$sql = "SELECT * FROM `crypto_backtest` ORDER BY `record_id` ASC";
if ($null_data == "no"){
    // SQL query to fetch all records
    $sql = "SELECT * FROM `crypto_backtest` WHERE `avg_next30` IS NOT NULL OR `avg_next30` != '' ORDER BY `record_id` ASC";
}
elseif ($null_data == "yes") {
    $sql = "SELECT * FROM `crypto_backtest` WHERE `avg_next30` IS NULL OR `avg_next30` = '' ORDER BY `record_id` ASC";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $records = [];

    // Fetch the results
    while($row = $result->fetch_assoc()) {
        $records[] = $row;
    }

    echo json_encode(["status" => "success", "data" => $records]);
} else {
    echo json_encode(["status" => "success", "data" => []]);
}

// Close connection
$conn->close();
?>