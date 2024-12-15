<?php
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
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch all records
$sql = "SELECT * FROM `crypto_backtest` ORDER BY `record_id` DESC";
$result = $conn->query($sql);
$records = [];

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>Record ID</th>
                <th>Coin Name</th>
                <th>Test ID</th>
                <th>Date Trigger</th>
                <th>Trigger Value</th>
                <th>Trigger Note</th>
                <th>Avg15 Per</th>
                <th>Min15 Per</th>
                <th>Max15 Per</th>
                <th>Avg30 Per</th>
                <th>Min30 Per</th>
                <th>Max30 Per</th>
                <th>Avg45 Per</th>
                <th>Min45 Per</th>
                <th>Max45 Per</th>
                <th>Result 15</th>
                <th>Result 30</th>
                <th>Result 45</th>
                <th>Last Update</th>
            </tr>";

    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $records[] = $row;

        echo "<tr>
                <td>" . $row["record_id"] . "</td>
                <td>" . $row["coin_name"] . "</td>
                <td>" . $row["test_id"] . "</td>
                <td>" . $row["date_trigger"] . "</td>
                <td>" . $row["trigger_value"] . "</td>
                <td>" . $row["trigger_note"] . "</td>
                <td>" . $row["avg15_per"] . "</td>
                <td>" . $row["min15_per"] . "</td>
                <td>" . $row["max15_per"] . "</td>
                <td>" . $row["avg30_per"] . "</td>
                <td>" . $row["min30_per"] . "</td>
                <td>" . $row["max30_per"] . "</td>
                <td>" . $row["avg45_per"] . "</td>
                <td>" . $row["min45_per"] . "</td>
                <td>" . $row["max45_per"] . "</td>
                <td>" . $row["result_15"] . "</td>
                <td>" . $row["result_30"] . "</td>
                <td>" . $row["result_45"] . "</td>
                <td>" . $row["last_update"] . "</td>
              </tr>";
    }
    echo "</table><br><br>";
    

    // echo json_encode(["status" => "success", "data" => $records]);
} else {
    echo "0 results";
}

// Close connection
$conn->close();
?>
