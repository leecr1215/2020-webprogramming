<?php
// 회원가입 php

$id =  $_POST["id"];
$pw = $_POST["pw"];
$exist = false;

// 이미 회원가입 되어있는지 검사
$J = file_exists("../person.json");
if($J){
  $JSON = file_get_contents("../person.json");
  $array = explode("\n", $JSON);
  for($i = 0; $i<count($array); $i++){
    if($array[$i]!=null){
      $line = json_decode($array[$i]);
      if($line->id == $id){
      //  $exist = true;
      }
    }
  }
}


 if($exist == true){ //이미 존재
   echo 0;
 }else{  // 존재 안함
  // 저장할 데이터
  if(!isset($myObj)){
    $myObj = new stdClass();
  }
  $myObj->id = $id;
  $myObj->pw = $pw;
  $json = json_encode($myObj);
  $json .= "\n";

  file_put_contents("../person.json", $json, FILE_APPEND);
  echo $id;
 }

 ?>
