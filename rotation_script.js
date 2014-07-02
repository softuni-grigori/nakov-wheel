var currentAngle = 0;
var currentRandom = 30;
var path = 0;


$("#wheel").rotate({
    bind:
      {
          click: function () {
              path = Math.random() * 4320;
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




              if (currentAngle <= 432) {
                  var str = String(quotes.a);
                  console.log("a");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.a;
                  document.getElementById("imgholder").appendChild(img);
              }
              else if (currentAngle > 432 && currentAngle <= 864) {
                  var str = String(quotes.b);
                  console.log("b");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.b;
                  document.getElementById("imgholder").appendChild(img);
              }
              else if (currentAngle > 864 && currentAngle <= 1296) {
                  var str = String(quotes.c);
                  console.log("c");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.c;
                  document.getElementById("imgholder").appendChild(img);
              }
              else if (currentAngle > 1296 && currentAngle <= 1728) {
                  var str = String(quotes.d);
                  console.log("d");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.d;
                  document.getElementById("imgholder").appendChild(img);
              }


              else if (currentAngle > 1728 && currentAngle <= 2160) {
                  var str = String(quotes.e);
                  console.log("e");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.e;
                  document.getElementById("imgholder").appendChild(img);
              }



              else if (currentAngle > 2160 && currentAngle <= 2592) {
                  var str = String(quotes.f);
                  console.log("f");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.f;
                  document.getElementById("imgholder").appendChild(img);
              }
              else if (currentAngle > 2592 && currentAngle <= 3024) {
                  var str = String(quotes.g);
                  console.log("g");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.g;
                  document.getElementById("imgholder").appendChild(img);
              }
              else if (currentAngle > 3024 && currentAngle <= 3456) {
                  var str = String(quotes.h);
                  console.log("h");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.h;
                  document.getElementById("imgholder").appendChild(img);
              }
              else if (currentAngle > 3456 && currentAngle <= 3888) {
                  var str = String(quotes.i);
                  console.log("i");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.i;
                  document.getElementById("imgholder").appendChild(img);
              }
              else if (currentAngle > 3888 && currentAngle <= 4320) {
                  var str = String(quotes.j);
                  console.log("j");
                  document.getElementById("jokeholder").innerHTML = str;
                  var img = document.createElement("img");
                  img.src = images.j;
                  document.getElementById("imgholder").appendChild(img);
              }

              setTimeout(function () {
                  $("#popout_div").fadeIn(1500);
              }, 1500);
          }
      }

});