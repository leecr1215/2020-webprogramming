<?php
$fileName = $_POST['fileName'];
$existData = array();

$json = file_get_contents($fileName);

$array = explode("\n", $json);
if(count($array)==0){
    // 리뷰가 등록되어있지 않은 경우
    echo 0;
    exit;
}
// 리뷰 등록되어있으면 등록되어 있는 리뷰의 userId, 평점, 내용을 배열에 넣고 보냄
for($i = 0; $i<count($array); $i++){
  if($array[$i]!=null){
    $line = json_decode($array[$i]);
      array_push($existData, $line->userId . '_' . $line->score . '_' . $line->content); //$existData 에 값 추가
  }
}

echo json_encode($existData);
 ?>
