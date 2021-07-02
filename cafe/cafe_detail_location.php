<?php
/*카페 이름으로 위치 가져오는 php*/
$fileName = $_POST['fileName'];
$cafeName = $_POST['cafeName'];

$json = file_get_contents($fileName);

$array = explode("\n", $json);
for($i = 0; $i<count($array); $i++){
  if($array[$i]!=null){
    $line = json_decode($array[$i]);
    if($line->en == $cafeName){
      echo $line->roadAddress;
    }
  }
}


 ?>
