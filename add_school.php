<?php
$conn = new mysqli("localhost", "root", "", "school");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$city = $data['city'];
$contact = $data['contact'];
$email = $data['email'];

$sql = "INSERT INTO schools (name, city, contact, email)
        VALUES ('$name', '$city', '$contact', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "error: " . $conn->error;
}

$conn->close();
?>