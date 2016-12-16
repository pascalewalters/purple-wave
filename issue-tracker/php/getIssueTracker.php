<?php

$servername = "localhost";
$username = "pascale";
$password = "Pascale";
$dbname = "purple_wave";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM issue_tracker";
$result = $conn->query($sql);

$issue_data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
	$issue_data[$row["date"]] = array("date" => $row["date"], "site" => $row["site"],
	    "program" => $row["program"], "room" => $row["room"], "user_name" => $row["user_name"],
	    "extension" => $row["extension"], "issue_category" => $row["issue_category"],
	    "issue_description" => $row["issue_description"], "reporting_manager" => $row["reporting_manager"],
	    "assigned_to" => $row["assigned_to"], "progress_notes" => $row["progress_notes"],
	    "closing_notes" => $row["closing_notes"], "status" => $row["status"]);
    }
} else {
    echo "No Issues";
}

ksort($issue_data);

echo json_encode($issue_data);

$conn->close();

?>
