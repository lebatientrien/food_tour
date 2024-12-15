<?php
header("Content-Type: application/json");

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
$coin_name = $_GET['coin_name'] ?? null;
$date_trigger = $_GET['date_trigger'] ?? null;

$avg_next15 = $_GET['avg_next15'] ?? null;
$min_next15 = $_GET['min_next15'] ?? null;
$max_next15 = $_GET['max_next15'] ?? null;
$avg_next30 = $_GET['avg_next30'] ?? null;
$min_next30 = $_GET['min_next30'] ?? null;
$max_next30 = $_GET['max_next30'] ?? null;
$avg_next45 = $_GET['avg_next45'] ?? null;
$min_next45 = $_GET['min_next45'] ?? null;
$max_next45 = $_GET['max_next45'] ?? null;

$avg15_per = $_GET['avg15_per'] ?? null;
$min15_per = $_GET['min15_per'] ?? null;
$max15_per = $_GET['max15_per'] ?? null;
$avg30_per = $_GET['avg30_per'] ?? null;
$min30_per = $_GET['min30_per'] ?? null;
$max30_per = $_GET['max30_per'] ?? null;
$avg45_per = $_GET['avg45_per'] ?? null;
$min45_per = $_GET['min45_per'] ?? null;
$max45_per = $_GET['max45_per'] ?? null;

$result_15 = $_GET['result_15'] ?? null;
$result_30 = $_GET['result_30'] ?? null;
$result_45 = $_GET['result_45'] ?? null;

// Check if all required parameters are provided
if ($coin_name) {
    // Prepare and bind
    $stmt = $conn->prepare("UPDATE `crypto_backtest` SET 
    `avg_next15` = ?, `min_next15` = ?, `max_next15` = ?, `avg_next30` = ?, `min_next30` = ?, `max_next30` = ?, `avg_next45` = ?, `min_next45` = ?, `max_next45` = ?, 
    `avg15_per` = ?, `min15_per` = ?, `max15_per` = ?, `avg30_per` = ?, `min30_per` = ?, `max30_per` = ?, `avg45_per` = ?, `min45_per` = ?, `max45_per` = ?,
    `result_15` = ?, `result_30` = ?, `result_45` = ? WHERE `crypto_backtest`.`coin_name` = ? AND `crypto_backtest`.`date_trigger` = ?");
    $stmt->bind_param("ddddddddddddddddddiiiss", $avg_next15, $min_next15, $max_next15, $avg_next30, $min_next30, $max_next30, $avg_next45, $min_next45, $max_next45,
    $avg15_per, $min15_per, $max15_per, $avg30_per, $min30_per, $max30_per, $avg45_per, $min45_per, $max45_per, $result_15, $result_30, $result_45, $coin_name, $date_trigger );

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Record updated successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $stmt->error]);
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
}

// Close connection
$conn->close();
?>
