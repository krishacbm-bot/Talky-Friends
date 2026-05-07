<?php
$conn = new mysqli("localhost","root","","school");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_FILES["file"]["tmp_name"])) {

    $file = fopen($_FILES["file"]["tmp_name"], "r");

    // skip header row
    fgetcsv($file);

    while(($data = fgetcsv($file, 1000, ",")) !== FALSE) {

        $fn = $data[0];
        $ln = $data[1];
        $sid = $data[2];
        $cls = $data[3];
        $subj = $data[4];
        $username = $data[5];
        $password = $data[6];
        $school = $data[7];

        $stmt = $conn->prepare("INSERT INTO students 
        (first_name,last_name,student_id,class,subject,username,password,school)
        VALUES (?,?,?,?,?,?,?,?)");

        $stmt->bind_param("ssssssss",
            $fn, $ln, $sid, $cls, $subj, $username, $password, $school
        );

        $stmt->execute();
    }

    fclose($file);

    echo "✅ Bulk upload successful!";
} else {
    echo "❌ No file uploaded";
}
?>