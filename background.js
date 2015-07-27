chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html',
                          {'frame':'none',
                           'innerBounds': {'width': 262,'height': 330},
                           'resizable':false,},
                           function(createdWindow){
                      				createdWindow.contentWindow.setOnTop = function(bool){
                      					createdWindow.setAlwaysOnTop(bool);
                              }
                              createdWindow.contentWindow.minimize = function(){
                                createdWindow.minimize();
                              }
		                       });
});
