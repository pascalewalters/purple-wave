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

$sql = "SELECT * FROM computer_inventory";
$result = $conn->query($sql);

$user_first_name = "Pascale";
$user_last_name = "Walters";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
	echo "<tr><td>" . 
	    $row["img_res"] . "</td><td> " . $row["user_name"] . 
	    "</td><td>" . $row["location"] . "</td><td>" . $row["computer_name"] . 
	    "</td><td>" . $row["asset_tag"] . "</td><td>" . $row["research_software"] .
	    "</td><td>" . $row["notes"] . "</td></tr>";
    }
} else {
    echo "<tr><td>No Computers</tr></td>";
}

$conn->close();

?>
