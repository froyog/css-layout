function changePicture(that) {
  var curPic = $(that);
  curPic.fadeOut(500);
  setTimeout(function() {
    curPic.next().fadeIn(500);
  }, 500);
}

function seeU(that) {
  that.innerText = "下周见";
  document.getElementsByClassName("section14")[0].className += " color-flash";
}

$(function() {
  $("#warpper").fullpage({
    navigation: true
  });
});
