<?php
session_start();

$conn = new mysqli("localhost", "root", "", "school");

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$password = $data['password'];

$sql = "SELECT * FROM students WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    if ($password === $user['password']) {

        // ✅ SESSION SAVE
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['role'] = $user['role'];

        // ✅ ROLE BASED REDIRECT
        $redirect = ($user['role'] === "student") 
            ? "index_new.html" 
            : "dashboard.html";

        echo json_encode([
            "status" => "success",
            "role" => $user['role'],
            "dashboard" => $redirect
        ]);

    } else {
        echo json_encode(["status" => "error", "message" => "Wrong password"]);
    }

} else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
}
?>