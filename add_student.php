<?php
header('Content-Type: application/json');

$conn = new mysqli("localhost", "root", "", "school");

if ($conn->connect_error) {
    echo json_encode(["status"=>"error","message"=>"DB connection failed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$fn = $data['fn'] ?? '';
$ln = $data['ln'] ?? '';
$sid = $data['sid'] ?? '';
$cls = $data['cls'] ?? '';
$subj = $data['subj'] ?? '';
$school = $data['school'] ?? '';
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

// ❗ DEBUG (check if data is coming)
if(!$fn || !$ln || !$username || !$password){
    echo json_encode([
        "status"=>"error",
        "message"=>"Missing required fields",
        "data"=>$data
    ]);
    exit;
}

$sql = "INSERT INTO students 
(first_name, last_name, student_id, class, subject, school, username, password)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if(!$stmt){
    echo json_encode(["status"=>"error","message"=>$conn->error]);
    exit;
}

$stmt->bind_param(
    "ssssssss",
    $fn, $ln, $sid, $cls, $subj, $school, $username, $password
);

if ($stmt->execute()) {
    echo json_encode(["status"=>"success"]);
} else {
    echo json_encode(["status"=>"error","message"=>$stmt->error]);
}
?>