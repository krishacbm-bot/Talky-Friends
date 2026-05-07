<?php
$conn = new mysqli("localhost", "root", "", "school");

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];

$conn->query("DELETE FROM students WHERE id=$id");

echo json_encode(["status"=>"success"]);
?>