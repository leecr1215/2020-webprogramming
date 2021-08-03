// 날씨 api 키: 
// 날씨 기호: °
// 궁동 위도: 36.362730534768
// 궁동 경도: 127.35184476683

// 날씨 api관련 코드
// openweathermap의 api를 사용했습니다.
//https://namjackson.tistory.com/27를 참고했습니다.
$(document).ready(function(){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat=36.362730534768&lon=127.35184476683&appid=api키&units=metric",
    dataType: "json",
    type: "GET",
    success: function(data){
      var icon = (data.weather[0].icon);
      var temp = Math.floor(data.main.temp) + "°";
      var wind = data.wind.speed + "m/s";
      var humidity = data.main.humidity + "%";
      var cloud = data.clouds.all + "%";
      var src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

      var image = document.createElement("img");
      image.setAttribute("src",src);
      image.setAttribute("id","src");


      var currIcon = document.getElementById("CurrIcon");
      currIcon.appendChild(image);
      $("#CurrTemp").prepend(temp);
      $("#wind").prepend(wind);
      $("#humidity").prepend(humidity);
      $("#cloud").prepend(cloud);
    },
    error: function(xhr,status,error){
       alert(error);
     }
  })

  var logoutBtn = document.getElementById("logoutBtn");

  // 현재 sessionStorage에 id 가 저장이 안되어있으면
  if(!sessionStorage.getItem("id")) {
    logoutBtn.disabled = true; // 로그아웃 버튼 비활성화
  }

  if(sessionStorage.getItem("id")) {
    logoutBtn.disabled = false;
  }
});

/*로그아웃 버튼*/
logoutBtn.onclick = function() {
  sessionStorage.removeItem('id');
  alert("로그아웃 되었습니다.");
  logoutBtn.disabled = true;
}
