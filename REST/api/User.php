<?php
session_start();

require_once './model/userClass.php'; // MODEL

//parse_str(file_get_contents("php://input"), $DATA);
//var_dump($DATA);

switch ($_SERVER['REQUEST_METHOD']){
    
    case 'GET':
            $USER = new UserClass();
            $userList = $USER->getUsers();
//            var_dump($_GET);
            header('Content-Type: application/json');
            echo json_encode($userList);
        break;
    case 'POST':
            $USER = new UserClass();
            $add = $USER->addUser($_POST['username'],$_POST['password']);
            header('Content-Type: application/json');
            echo json_encode($add);
        break;
    
    case 'PUT': //aktualizacaj
            parse_str(file_get_contents("php://input"), $PUT);
            var_dump($PUT);
            
        break;
    case 'DELETE': //aktualizacaj
            parse_str(file_get_contents("php://input"), $DELETE);
            var_dump($DELETE);
            
        break;
    
}
