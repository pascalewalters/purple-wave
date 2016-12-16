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

$sql = "UPDATE issue_tracker SET assigned_to='" . $_POST['assignedTo'] . "', progress_notes='" .
    $_POST['progressNotes'] . "', status='" . $_POST['status'] . "' ";

if ($_POST['status'] == "Closed") {
    $sql .= ", closing_notes='" . $_POST['closingNotes'] . "' ";
}

$sql .= "WHERE user_name='" . $_POST['username'] . "' AND issue_description='" . $_POST['issueDescription'] . "'";

$result = $conn->query($sql);

if ($result === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
