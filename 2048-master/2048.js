window.onload = function () {
  gameObj.initStage();
  gameObj.newBox();

  var stage = document.getElementById("stage");
  document.onmousedown = function (e) {
    var event = e;
    var obj = event.target;
    var x = event.clientX;
    var y = event.clientY;
    controller.start(x, y);
  };

  document.onmousemove = function (e) {
    var event = e;
    var x = event.clientX;
    var y = event.clientY;
    controller.move(x, y);
  };

  document.onmouseup = function (e) {
    var event = e;
    var y = event.target;
    var x = event.clientX;
    controller.end(x, y);
  };

  function keyUp(e) {
    var currKey = 0,
      e = e;
    currKey = e.keyCode || e.which || e.charCode;
    switch (currKey) {
      case 37:
        gameObj.move(0, 0);
        break;
      case 38:
        gameObj.move(1, 0);
        break;
      case 39:
        gameObj.move(0, 1);
        break;
      case 40:
        gameObj.move(1, 1);
        break;
    }
  }
  document.onkeyup = keyUp;
};
