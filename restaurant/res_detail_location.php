<?php
/*음식점 이름으로 위치 가져오는 php*/
$fileName = $_POST['fileName'];
$resName = $_POST['resName'];

$json = file_get_contents($fileName);

$array = explode("\n", $json);
for($i = 0; $i<count($array); $i++){
  if($array[$i]!=null){
    $line = json_decode($array[$i]);
    if($line->en == $resName){
      echo $line->roadAddress;
    }
  }
}

 ?>
