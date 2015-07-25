
      var rgbStr="rgb(255,255,255)",
          hexStr = "#FFFFFF",
          hsvStr = "hsv(360,0,100)",
          copyStr = "";

      ColorPicker(
        document.getElementById('color-picker'),
        function(hex, hsv, rgb) {
          hexStr = hex.toString();
          rgbStr = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
          hsvStr = "hsv(" + hsv.h + "," + hsv.s + "," + hsv.v + ")";
          document.body.style.backgroundColor = hex;
        });

        var rgbButton = document.getElementById("rgbButton");
        var hsvButton = document.getElementById("hsvButton");
        var hexButton = document.getElementById("hexButton");

        rgbButton.onclick=function(){
          copyStr = rgbStr;
          document.execCommand('copy');
          console.log("rgbClick");
          console.log(rgbStr);
        }
        hexButton.onclick=function(){
          copyStr = hexStr;
          document.execCommand('copy');
          console.log("hexClick");
          console.log(hexStr);
        }
        hsvButton.onclick=function(){
          copyStr = hsvStr;
          document.execCommand('copy');
          console.log("hsvClick");
          console.log(hsvStr);
        }

        document.addEventListener('copy', function(e) {
          e.clipboardData.setData('text/plain', copyStr);
          e.preventDefault();
        });
