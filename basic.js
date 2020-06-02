function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function functionBig(img) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = img.src;
}

  tns({ 
  "items": 2,
  "controls": false,
  "responsive": {
    "350": {
      "items": 3,
      "controls": false,
      "edgePadding": 30,
      autoplayButtonOutput: false

    },
    "500": {
      "items": 4,
      "controls": false
    }
  },
  "container": ".container",
  "swipeAngle": false,
  "speed": 400,
  autoplayButtonOutput: false,
  "autoplay": true
});

  // tns({
  //   container: '.container',
  //   mode: 'gallery', // or 'gallery'
  //   axis: 'vertical', // or 'vertical'
  //   items: 3,
  //   gutter: 0,
  //   edgePadding: 0,
  //   fixedWidth: false,
  //   slideBy: 1,
  //   controls: true,
  //   controlsText: ['prev', 'next'],
  //   controlsContainer: false,
  //   nav: true,
  //   navContainer: false,
  //   navAsThumbnails: false,
  //   arrowKeys: false,
  //   speed: 300,
  //   autoplay: true,
  //   autoplayTimeout: 5000,
  //   autoplayDirection: 'forward',
  //   autoplayText: ['start', 'stop'],
  //   autoplayHoverPause: false,
  //   autoplayButton: false,
  //   autoplayButtonOutput: true,
  //   autoplayResetOnVisibility: true,
  //   loop: true,
  //   rewind: false,
  //   responsive: true,
  //   lazyload: false,
  //   touch: true,
  //   mouseDrag: false,
  //   swipeAngle: 15,
  //   nested: false,
  //   freezable: true,
  //   onInit: false
  // });