<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $upload_dir = '../crypto/';
    $upload_file = $upload_dir . basename($_FILES['file']['name']);

    if (move_uploaded_file($_FILES['file']['tmp_name'], $upload_file)) {
        echo "File successfully uploaded.";
    } else {
        echo "File upload failed.";
    }
} else {
    echo "No file uploaded.";
}
?>