/*하나의 음식점 누르면*/
function detail(e){
  var resName = $(e).attr("id");
  sessionStorage.setItem('resName',resName);  // sessionStorage에 저장(카페 영어이름)
  sessionStorage.setItem('resNameKo',$(e).attr("name")); // sessionStorage에 저장(카페 한글이름)
  window.location.href="res_detail.html";  // cafe_detail.html로 이동
}

var logoutBtn = document.getElementById("logoutBtn");

/*로그아웃*/
logoutBtn.onclick = function() {
    sessionStorage.removeItem('id');
    alert("로그아웃 되었습니다.");
    logoutBtn.disabled = true;
}
