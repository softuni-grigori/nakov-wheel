var currentAngle = 0;
var currentRandom = 30;
var path = 0;


$("#wheel").rotate({
    bind:
      {
          click: function () {
              path = Math.random() * 1080;
              currentRandom = currentAngle - path;
              if (currentRandom < 0) {
                  currentRandom = currentRandom * (-1);
                  if (currentRandom < 100) {
                      path = Math.random() * 1080;
                  }
              }
              else {
                  if (currentRandom < 100) {
                      path = Math.random() * 1080;
                  }
              }

              $(this).rotate({ angle: currentAngle, animateTo: path, easing: $.easing.easeInOutExpo })

              currentAngle = path;
              console.log(currentAngle);

              if (currentAngle <= 108) {
                  document.getElementById("jokeholder").innerHTML = db.a;
              }
              else if (currentAngle > 108 && currentAngle <= 216) {
                  document.getElementById("jokeholder").innerHTML = db.b;
              }
              else if (currentAngle > 216 && currentAngle <= 324) {
                  document.getElementById("jokeholder").innerHTML = db.c;
              }
              else if (currentAngle > 324 && currentAngle <= 432) {
                  document.getElementById("jokeholder").innerHTML = db.d;
              }
              else if (currentAngle > 432 && currentAngle <= 540) {
                  document.getElementById("jokeholder").innerHTML = db.e;
              }
              else if (currentAngle > 540 && currentAngle <= 648) {
                  document.getElementById("jokeholder").innerHTML = db.f;
              }
              else if (currentAngle > 648 && currentAngle <= 756) {
                  document.getElementById("jokeholder").innerHTML = db.g;
              }
              else if (currentAngle > 756 && currentAngle <= 864) {
                  document.getElementById("jokeholder").innerHTML = db.h;
              }
              else if (currentAngle > 864 && currentAngle <= 972) {
                  document.getElementById("jokeholder").innerHTML = db.i;
              }
              else if (currentAngle > 972 && currentAngle <= 1080) {
                  document.getElementById("jokeholder").innerHTML = db.j;
              }

              setTimeout(function(){
              $("#popout_div").fadeIn(700);
              }, 1500);

              console.log(db.b);
          }
      }

});