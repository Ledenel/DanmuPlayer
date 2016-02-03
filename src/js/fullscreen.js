// Generated by CoffeeScript 1.10.0
(function() {
  $.fn.fullscreen = function() {
    var x;
    x = this[0];
    if (typeof x.requestFullscreen === "function") {
      x.requestFullscreen();
    }
    if (typeof x.msRequestFullScreen === "function") {
      x.msRequestFullScreen();
    }
    if (typeof x.mozRequestFullScreen === "function") {
      x.mozRequestFullScreen();
    }
    return typeof x.webkitRequestFullScreen === "function" ? x.webkitRequestFullScreen() : void 0;
  };

  $.fullscreenExit = function() {
    if (typeof document.exitFullscreem === "function") {
      document.exitFullscreem();
    }
    if (typeof document.webkitCancelFullScreen === "function") {
      document.webkitCancelFullScreen();
    }
    if (typeof document.mozCancelFullScreen === "function") {
      document.mozCancelFullScreen();
    }
    if (typeof document.msCancelFullScreen === "function") {
      document.msCancelFullScreen();
    }
    return typeof document.msExitFullScreen === "function" ? document.msExitFullScreen() : void 0;
  };

}).call(this);

//# sourceMappingURL=fullscreen.js.map
