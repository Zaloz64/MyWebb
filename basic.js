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
