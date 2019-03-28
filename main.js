var buttonMagenta = document.getElementById("btnMagenta");
buttonMagenta.onclick=function(){
  document.body.style.backgroundColor='magenta';
  var h1Elements = document.getElementsByTagName("h1");
  for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "green";
    h1Elements[i].style.fontFamily = "Comic Sans MS, Comic Sans, cursive, sans-serif,arial";
  }
  var h2Elements = document.getElementsByTagName("h2");
  for(var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "green";
    h2Elements[i].style.fontFamily = "Comic Sans MS, Comic Sans, cursive, sans-serif,arial";
  }
  var h3Elements = document.getElementsByTagName("h3");
  for(var i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.color = "green";
    h3Elements[i].style.fontFamily = "Comic Sans MS, Comic Sans, cursive, sans-serif,arial";
  }
  var pElements = document.getElementsByTagName("p");
  for(var i = 0; i < pElements.length; i++) {
    pElements[i].style.color = "blue";
    pElements[i].style.fontFamily = "papyrus";
  }
  var liElements = document.getElementsByTagName("li");
  for(var i = 0; i < liElements.length; i++) {
    liElements[i].style.color = "blue";
    liElements[i].style.fontFamily = "papyrus, arial";
  }
}

//********************La popup******************
setTimeout(displayPopUp, 10000);

function displayPopUp(){
  /*OuvrirPopup('popup.html', 'salut-toi', 'resizable=no, location=no, width=400, height=100, menubar=no, status=no, scrollbars=no, menubar=no')*/
  OuvrirPopup('popup.html','salut-toi','500','200');
}


function OuvrirPopup(url, title, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var systemZoom = width / window.screen.availWidth;
  var left = (width - w) / 2 / systemZoom + dualScreenLeft
  var top = (height - h) / 2 / systemZoom + dualScreenTop
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) newWindow.focus();
}
