<?php


class UserClass{
    
    public function __construct() {
        if(!$_SESSION['users']){
            $_SESSION['users']=[
                        ['userName'=>'Janek', 'password'=>'2esdfw23sdver3f'],
                        ['userName'=>'Wojtek', 'password'=>'2esdfw23sdver3f'],
                        ['userName'=>'Gutek', 'password'=>'2esdfw23sdver3f'],
                        ['userName'=>'Zosia', 'password'=>'2esdfw23sdver3f'],
                        ['userName'=>'Frania', 'password'=>'2esdfw23sdver3f']
                    ];
        }
    }
    
    
    public function getUsers(){
        
        return $_SESSION['users'];
        
    }

    public function addUser($userName, $userPassword){
        if($userName && $userPassword){
            $newUser = ['userName'=> $userName, 'password'=>$userPassword, 'id'=>rand(0,1000)]; 
            $_SESSION['users'][] = $newUser; 
            
            return $newUser;
        }else{
            return false;
        }
    }
    
}