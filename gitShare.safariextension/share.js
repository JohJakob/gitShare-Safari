// Made with <3 in Germany

var li = document.createElement("li");
var button = document.createElement("a");
var span = document.createElement("span");
var text = document.createTextNode(" Share");

if (document.getElementsByClassName("repository-description")[0]) {
  var description = document.getElementsByClassName("repository-description")[0].innerText;

  button.href = "https://twitter.com/intent/tweet?text=" + document.title + "%20-%20" + description + "%20" + document.location;
} else {
  button.href = "https://twitter.com/intent/tweet?text=" + document.title + "%20" + document.location;
}

button.target = "_blank";
button.className = "btn btn-sm btn-without-count";
button.title = "Share this repository on Twitter";

span.className = "octicon";
span.innerHTML = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Larry" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="1.844 0 16 16" enable-background="new 1.844 0 16 16" xml:space="preserve"><path id="Larry_1_" fill="#333333" d="M17.844,3.039c-0.588,0.261-1.221,0.438-1.884,0.517c0.678-0.406,1.198-1.049,1.442-1.814c-0.634,0.375-1.337,0.648-2.085,0.795C14.719,1.898,13.868,1.5,12.923,1.5c-1.813,0-3.284,1.469-3.284,3.281c0,0.258,0.03,0.508,0.085,0.749c-2.728-0.137-5.147-1.443-6.766-3.43C2.675,2.585,2.513,3.149,2.513,3.75c0,1.139,0.58,2.145,1.46,2.733c-0.538-0.017-1.044-0.164-1.487-0.41c0,0.014,0,0.026,0,0.042c0,1.589,1.131,2.916,2.632,3.217C4.844,9.406,4.555,9.446,4.256,9.446c-0.211,0-0.417-0.021-0.618-0.058c0.417,1.303,1.629,2.252,3.066,2.278c-1.123,0.881-2.539,1.405-4.076,1.405c-0.265,0-0.526-0.016-0.783-0.046c1.453,0.932,3.179,1.475,5.032,1.475c6.04,0,9.341-5.002,9.341-9.338c0-0.143-0.003-0.284-0.011-0.424C16.848,4.276,17.405,3.696,17.844,3.039z"/></svg>';

button.appendChild(span);
button.appendChild(text);
li.appendChild(button);

if (document.getElementsByClassName("pagehead-actions")[0] && document.title != "Your Followers" && document.title != "You're following") {
  document.getElementsByClassName("pagehead-actions")[0].appendChild(li);
}
