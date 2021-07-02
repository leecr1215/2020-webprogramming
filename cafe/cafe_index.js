/*하나의 카페 누르면*/
function detail(e){
  var cafeName = $(e).attr("id");
  sessionStorage.setItem('cafeName',cafeName);  // sessionStorage에 저장(카페 영어이름)
  sessionStorage.setItem('cafeNameKo',$(e).attr("name")); // sessionStorage에 저장(카페 한글이름)
  window.location.href="cafe_detail.html";  // cafe_detail.html로 이동
}

var logoutBtn = document.getElementById("logoutBtn");

/*로그아웃*/
logoutBtn.onclick = function() {
    sessionStorage.removeItem('id');
    alert("로그아웃 되었습니다.");
    logoutBtn.disabled = true;
}
