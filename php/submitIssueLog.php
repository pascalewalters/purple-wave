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

$date = date("Y-m-d");
$site = $_POST["site"] == "" ? "N/A" : $_POST["site"];
$programName = $_POST["programName"] == "" ? "N/A" : $_POST["programName"];
$room = $_POST["room"] == "" ? "N/A" : $_POST["room"];
$username = $_POST["username"];
$extension = $_POST["extension"];
$issueCategory = $_POST["issueCategory"];
$issueDescription = $_POST["issueDescription"];
$manager = $_POST["manager"] == "" ? "N/A" : $_POST["manager"];
$owner = $_POST["owner"];
$progressNotes = $_POST["progressNotes"] == "" ? "N/A" : $_POST["progressNotes"];

$sql = "INSERT INTO issue_tracker (date, site, program, room, user_name, extension, issue_category, issue_description, " .
    "reporting_manager, assigned_to, progress_notes, status) VALUES ('" . $date . "', '" . $site . "', '" . $programName . "', '" .
    $room . "', '" . $username . "', '" . $extension . "', '" . $issueCategory . "', '" . $issueDescription . "', '" .
    $manager . "', '" . $owner . "', '" . $progressNotes . "', 'In Progress')";

if ($conn->query($sql) === TRUE) {
    echo "Computer logged successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
