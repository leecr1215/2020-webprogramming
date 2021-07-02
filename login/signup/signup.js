
var okBtn = document.getElementById("okBtn"); // 확인버튼
var cancelBtn = document.getElementById("cancelBtn"); //취소버튼

// 확인 버튼 누를시
okBtn.onclick = function() {
  var id = document.getElementById("id").value;  // 아이디
  var pw = document.getElementById("password").value;  // 비밀번호
  var jsonInfo = {
    id: id,
    pw: pw
  };
  $.ajax({
    url: "signup.php",
    type: "POST",
    async: false,
    data: jsonInfo,
    success: function(data) { // 성공시 실행할 callback 함수
      if(data == 0){
        alert("이미 존재하는 아이디입니다.");
      }else{
        alert("회원 가입이 완료되었습니다.");
        window.location.href="../../index.html?id="+data+"&checkLogin=1";
      }
    },
    error: function(xhr, status, error) {
      alert(error);
    }
  });
}

// 취소버튼 -> 다시 index.html로 돌아가기
cancelBtn.onclick = function() {
window.location.href="../../index.html";
}
