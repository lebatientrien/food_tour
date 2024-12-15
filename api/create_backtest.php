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
    error_log("Connection failed: " . $conn->connect_error);
    die(json_encode(["status" => "error", "message" => "Connection failed"]));
}

// Get the parameters from the URL and sanitize them
$coin_name = htmlspecialchars($_GET['coin_name'] ?? '', ENT_QUOTES, 'UTF-8');
$test_id = htmlspecialchars($_GET['test_id'] ?? '', ENT_QUOTES, 'UTF-8');
$date_trigger = htmlspecialchars($_GET['date_trigger'] ?? '', ENT_QUOTES, 'UTF-8');
$trigger_value = filter_input(INPUT_GET, 'trigger_value', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
$trigger_note = htmlspecialchars($_GET['trigger_note'] ?? '', ENT_QUOTES, 'UTF-8');
$avg_next15 = filter_input(INPUT_GET, 'avg_next15', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
$min_next15 = filter_input(INPUT_GET, 'min_next15', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
$max_next15 = filter_input(INPUT_GET, 'max_next15', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
$avg_next30 = filter_input(INPUT_GET, 'avg_next30', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
$min_next30 = filter_input(INPUT_GET, 'min_next30', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
$max_next30 = filter_input(INPUT_GET, 'max_next30', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

// Check if all required parameters are provided
if ($coin_name && $date_trigger) {
    // Check for duplicate record
    $check_stmt = $conn->prepare("SELECT COUNT(*) FROM `crypto_backtest` WHERE coin_name = ? AND date_trigger = ?");
    $check_stmt->bind_param("ss", $coin_name, $date_trigger);
    $check_stmt->execute();
    $check_stmt->bind_result($count);
    $check_stmt->fetch();
    $check_stmt->close();

    if ($count > 0) {
        echo json_encode(["status" => "error", "message" => "Duplicate record found"]);
    } else {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO `crypto_backtest` (coin_name, test_id, date_trigger, trigger_value, trigger_note, avg_next15, min_next15, max_next15, avg_next30, min_next30, max_next30) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssdsdddddd", $coin_name, $test_id, $date_trigger, $trigger_value, $trigger_note, $avg_next15, $min_next15, $max_next15, $avg_next30, $min_next30, $max_next30);

        // Execute the statement
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "New record created successfully"]);
        } else {
            error_log("Error: " . $stmt->error);
            echo json_encode(["status" => "error", "message" => "Error creating record"]);
        }

        // Close the statement
        $stmt->close();
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
}

// Close connection
$conn->close();
?>