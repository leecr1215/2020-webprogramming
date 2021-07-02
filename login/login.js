// 로그인 버튼 눌렀을 때
$('#loginBtn').click(function(){
  var jsonInfo = {id:$('#id').val(),password:$('#password').val()};
  console.log(jsonInfo);

$.ajax({
  url: "login.php?v=<%=System.currentTimeMillis() %>",
  type: "POST",
  data: jsonInfo,
  success: function(data){  // 성공시 실행할 callback 함수
    if(data==0){
      alert("입력하신 id가 존재하지 않거나 패스워드가 틀립니다.");
    }else {
      sessionStorage.setItem('id',data);
      window.location.href="../index.html?id="+data+"&checkLogin=1";
    }
  }, error: function(xhr,status,error){
    alert(error);
  }
});
});
