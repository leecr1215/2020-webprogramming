<?php
//리뷰 등록할때 실행되는 php
$userId = $_POST['userId'];
$score = $_POST['score'];
$content = $_POST['content'];
$fileName = $_POST['fileName'];

// 카페이름.json에 저장하기
if(!isset($myObj)){
    $myObj = new stdClass();
  }
  $myObj->userId = $userId;
  $myObj->score = $score;
  $myObj->content = $content;
  $json = json_encode($myObj);
  $json .= "\n";

  file_put_contents($fileName, $json, FILE_APPEND);
  echo "리뷰가 등록되었습니다.";
 ?>
