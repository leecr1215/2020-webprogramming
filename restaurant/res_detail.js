var reviewBtn = document.getElementById("reviewBtn"); //리뷰 등록 버튼
var tbody = document.getElementById("tbody"); // 기존에 존재하는 리뷰 테이블
var logoutBtn = document.getElementById("logoutBtn"); // 로그아웃 버튼
var people = 0;   // 리뷰 등록한 사람 수
var scoreSum = 0;  // 평점 합

//음식점 이름 추가
var resName = document.getElementById("resName");
resName.innerHTML = sessionStorage.getItem("resNameKo");

// 저장되어있는 리뷰를 table에 추가해야함.
  var filename = "./res_review/" + sessionStorage.getItem('resName') + ".json";
  var jsonInfo = { fileName: filename};
  $.ajax({
    url: "res_detail_review.php",
    type: "POST",
    async: false,
    data: jsonInfo,
    success: function(data) { // 성공시 실행할 callback 함수
      if(data==0){
        // 등록된 리뷰가 없을 경우
      }else{
        // 등록된 리뷰가 있을경우
        var arr = JSON.parse(data);
        for(var i = 0; i < arr.length; i++){
          var subarr = arr[i].split("_");
          var subarr1 = subarr[0];  // 아이디
          var subarr2 = subarr[1];  // 평점
          var subarr3 = subarr[2]; // 리뷰내용

          var rowCount = tbody.rows.length;
          var new_row = tbody.insertRow(rowCount);  // 새로운 행 추가

          var cell0 = new_row.insertCell(0);  // 아이디
          cell0.innerHTML = subarr1;

          var cell1 = new_row.insertCell(1);  // 평점
          cell1.innerHTML = subarr2;

          var cell2 = new_row.insertCell(2);  // 리뷰내용
          cell2.innerHTML = subarr3;

          scoreSum += Number(subarr2);
          people += 1;
        }
      }

    },
    error: function(xhr, status, error) {
      alert(error);
    }
  });

  // 위치 가져오기
  var jsonInfo = {
  fileName: "resList.json",
  resName: sessionStorage.getItem('resName')
  };
  // 해당하는 음식점 이름의 위치 불러오기
  $.ajax({
  url: "res_detail_location.php",
  type: "POST",
  async: false,
  data: jsonInfo,
  success: function(data) { // 성공시 실행할 callback 함수
    var locationContent = document.getElementById("locationContent");
    locationContent.innerHTML = data;
  },
  error: function(xhr, status, error) {
    alert(error);
  }
  });

  // 이미지 사진 바꾸기
$("#resImg").attr("src" , sessionStorage.getItem('resName')+".jpg")



  // 평점 계산해서 넣기
  var realscore = document.getElementById("realscore");
  if(people!=0){
      realscore.innerHTML = scoreSum/Number(people);
  }else{
    realscore.innerHTML = "아직 리뷰가 없습니다.";
  }

reviewBtn.onclick = function() {
  if(!sessionStorage.getItem('id')){
    alert("로그인을 해주세요.");
  }else{
    // 리뷰내용 비어있는지 확인
    if(document.getElementById("text").value==''){
      alert("리뷰내용을 작성해주세요.");
    }else{
      var rowCount = tbody.rows.length;
      var new_row = tbody.insertRow(rowCount);  // 새로운 행 추가

      var cell0 = new_row.insertCell(0);  // 아이디
      cell0.innerHTML = sessionStorage.getItem('id');

      var cell1 = new_row.insertCell(1);  // 평점
      cell1.innerHTML = $("#select option:selected").text();
      scoreSum += Number($("#select option:selected").text());
      people += 1;

      var cell2 = new_row.insertCell(2);  // 리뷰내용
      var content = document.getElementById("text");
      cell2.innerHTML = content.value;

      var filename = "./res_review/" + sessionStorage.getItem('resName') + ".json";
      var jsonInfo = {
      userId: sessionStorage.getItem('id'),
      score: $("#select option:selected").text(),
      content: content.value,
      fileName: filename
    };
    // 평점 다시 업데이트
    realscore.innerHTML = scoreSum/Number(people);
    // json 파일에 해당 리뷰 업데이트
    $.ajax({
      url: "res_detail.php",
      type: "POST",
      async: false,
      data: jsonInfo,
      success: function(data) { // 성공시 실행할 callback 함수
        alert("리뷰가 등록되었습니다.");
        $("#text").text(" ");
      },
      error: function(xhr, status, error) {
        alert(error);
      }
    });
    }

  }
}

/*로그아웃 버튼*/
logoutBtn.onclick = function() {
    sessionStorage.removeItem('id');
    alert("로그아웃 되었습니다.");
    logoutBtn.disabled = true;
}
