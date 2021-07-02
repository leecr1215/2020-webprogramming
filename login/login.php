<?php
// 로그인 php

$id =  $_POST["id"];  // 현재 로그인 한 id
$password = $_POST["password"]; // 현재 로그인 한 비밀번호
$login = false; // 로그인 성공 여부 저장

// 일치하는 아이디와 비밀번호 있는지 확인
$JSON = file_get_contents("person.json"); // person.json에 있는 내용
$array = explode("\n", $JSON);  // 띄어쓰기를 기준으로 나눠서 배열에 옮기기
// 배열 index 하나씩 돌면서 해당하는 아이디랑 비밀번호 있는지 확인
for($i = 0; $i<count($array); $i++){
  if($array[$i]!=null){
    $line = json_decode($array[$i]);  // i번째 인덱스 값 decode하기
    if($line->id == $id){ // i번째 인덱스의 아이디와 현재 로그인 한 아이디 같으면
      if($line->pw == $password){ // i번째 인덱스의 비밀번호와 현재 로그인 한 비밀번호 같으면
        $login = true;  // 로그인 가능
        echo $id;
      }
    }
  }
}

if(!$login){  // 로그인 실패
  echo 0;
}

 ?>
