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

$imgRes = $_POST["imgRes"];
$username = $_POST["username"] == "" ? "N/A" : $_POST["username"];
$loc = $_POST["loc"];
$computerName = $_POST["computerName"];
$assetTag = $_POST["assetTag"] == "" ? "N/A" : $_POST["assetTag"];
$researchSoftware = $_POST["researchSoftware"] == "" ? "N/A" : $_POST["researchSoftware"];
$notes = $_POST["notes"] == "" ? "N/A" : $_POST["notes"];

$sql = "INSERT INTO computer_inventory (img_res, user_name, location, computer_name, asset_tag, research_software, notes) VALUES " .
    "('" . $imgRes . "', '" . $username . "', '" . $loc . "', '" . $computerName . "', '" . $assetTag . "', '" . 
    $researchSoftware . "', '" . $notes . "')";

if ($conn->query($sql) === TRUE) {
    echo "Computer logged successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
