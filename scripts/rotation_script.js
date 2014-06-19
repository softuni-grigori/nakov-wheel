var currentAngle = 0;
var _step = 30;
var path = 0;

$("#pointer_div").rotate({
    bind:
      {
          click: function () {
              path = Math.random() * 1080;
              $(this).rotate({ angle: currentAngle, animateTo: path, easing: $.easing.easeInOutExpo })

              currentAngle = path;
              setTimeout(function(){
              $("#popout_div").css('z-index', 5);
              $("#content").css('z-index', 2);}, 1500);

              console.log(db.b);
          }
      }

});