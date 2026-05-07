<?php
$conn = new mysqli("localhost", "root", "", "school");

// counts
$students = $conn->query("SELECT COUNT(*) as total FROM students")->fetch_assoc();
$schools  = $conn->query("SELECT COUNT(*) as total FROM schools")->fetch_assoc();
$classes  = $conn->query("SELECT COUNT(*) as total FROM classes")->fetch_assoc();

echo json_encode([
  "students" => $students['total'],
  "schools" => $schools['total'],
  "classes" => $classes['total']
]);
?>