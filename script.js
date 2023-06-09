
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    

    var session = "AM";

  

    if(h > 12) {
        h = h - 12;
        session = "PM";
    }


  
    

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;

    setTimeout(showTime, 1000);
}



showTime();

// Change background image based on time of day
var body = document.querySelector('body');
var currentHour = new Date().getHours();

if (currentHour >= 18 || currentHour < 6) {
  body.classList.add('night');
}
else {
  body.classList.remove('night');
}



n
