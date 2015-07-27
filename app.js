
//Thanks to Salman A
function invertColor(hexTripletColor) {
  var color = hexTripletColor;
  color = color.substring(1);           // remove #
  color = parseInt(color, 16);          // convert to integer
  color = 0xFFFFFF ^ color;             // invert three bytes
  color = color.toString(16);           // convert to hex
  color = ("000000" + color).slice(-6); // pad with leading zeros
  color = "#" + color;                  // prepend #
  return color;
}

var rgbStr="rgb(255,255,255)",
    hexStr = "#FFFFFF",
    hsvStr = "hsv(360,0,100)",
    copyStr = "";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font="25px sans-serif";
ctx.fillStyle = hexStr;
ctx.fillRect(0,0,canvas.width,canvas.height);

ColorPicker(
  document.getElementById('color-picker'),
  function(hex, hsv, rgb) {
    hexStr = hex.toString();
    rgbStr = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    hsvStr = "hsv(" + hsv.h + "," + hsv.s + "," + hsv.v + ")";
    //document.body.style.backgroundColor = hex;
    ctx.fillStyle = rgbStr;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = invertColor(hexStr);
    ctx.fillText(hexStr,70,canvas.height/2+10);
  });

  canvas.fillStyle = "rgb(255,255,255)";
  ctx.fillRect(0,0,canvas.width,canvas.height);


  var rgbButton = document.getElementById("rgbButton");
  var hsvButton = document.getElementById("hsvButton");
  var hexButton = document.getElementById("hexButton");

  var pinButton = document.getElementById("pinButton");
  var closeButton = document.getElementById("closeButton");
  var minimizeButton = document.getElementById("minimizeButton");

  var pinned = false;

  closeButton.onclick=function(){
    console.log("close");
    self.close();
  }

  rgbButton.onclick=function(){
    copyStr = rgbStr;
    document.execCommand('copy');
  }
  hexButton.onclick=function(){
    copyStr = hexStr;
    document.execCommand('copy');
  }
  hsvButton.onclick=function(){
    copyStr = hsvStr;
    document.execCommand('copy');
  }
  minimizeButton.onclick=function(){
    minimize();
  }
	pinButton.onclick = function(){
    pinned = !pinned;
    pinButton.src = pinned ? "assets/pinned.png" : "assets/unpinned.png";
    setOnTop(pinned);
	}

  document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', copyStr);
    e.preventDefault();
  });
