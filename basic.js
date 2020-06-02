function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function functionBig() {

  console.log('do you work');
    // // Get the expanded image
    // var expandImg = document.getElementById("expandedImg");
    // // Get the image text
    // var imgText = document.getElementById("imgtext");
    // // Use the same src in the expanded image as the image being clicked on from the grid
    // expandImg.src = imgs.src;
    // // Use the value of the alt attribute of the clickable image as text inside the expanded image
    // imgText.innerHTML = imgs.alt;
    // // Show the container element (hidden with CSS)
    // expandImg.parentElement.style.display = "block";
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