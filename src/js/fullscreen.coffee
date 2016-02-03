$.fn.fullscreen = ->
  x = this[0]
  x.requestFullscreen?()
  x.msRequestFullScreen?()
  x.mozRequestFullScreen?()
  x.webkitRequestFullScreen?()

$.fullscreenExit = ->
  document.exitFullscreem?()
  document.webkitCancelFullScreen?()
  document.mozCancelFullScreen?()
  document.msCancelFullScreen?()
  document.msExitFullScreen?()