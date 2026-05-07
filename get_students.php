<?php
include "db.php";

$sql = "
SELECT 
  students.*,
  schools.name AS school_name
FROM students
LEFT JOIN schools ON students.school_id = schools.id
";

$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()){
    $data[] = $row;
}

echo json_encode($data);
?>