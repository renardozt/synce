<?php
header("Access-Control-Allow-Origin: *");

$accessToken = "tkB1B6809165G0XJ6xZYPomFU9xDqA";

$headers = apache_request_headers();

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $auth = base64_decode($headers['Authorization']);
    
    if ($auth != $accessToken) {
        $err = new stdClass();
        $err->error = true;
        $err->message = "Unauthorized Access!";
        
        $errJSON = json_encode($err);
        
        echo $errJSON;
        exit();
    }
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    
    if (!$data['servers'] || !$data['members'] || !$data['channels'] || !$data['refresh']) {
        $err = new stdClass();
        $err->error = true;
        $err->message = "Missing Data!";
        
        $errJSON = json_encode($err);
        
        echo $errJSON;
        exit();
    }
    
    $stats = new stdClass();
    $stats->servers = $data['servers'];
    $stats->members = $data['members'];
    $stats->channels = $data['channels'];
    $stats->refresh = $data['refresh'];
    
    $statsJSON = json_encode($stats);
    
    
    $status = new stdClass();
    $status->status = true;
    $status->message = "Saved Successfully!";
        
    $statusJSON = json_encode($status);
    
    file_put_contents("stats.json", $statsJSON);
    
    echo $statusJSON;
    exit();
} else {
    $file = file_get_contents("stats.json");
    $fileJSON = json_decode($file);
    
    echo $file;
    exit();
}
?>