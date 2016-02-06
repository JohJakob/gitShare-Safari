// gitShare-Safari 1.3

// Made with <3 in Germany

// Create requiered elements (based on the "Watch" button)

var li = document.createElement("li");
var liButton = document.createElement("a");
var menu = document.createElement("div");
var menuButton = document.createElement("span");
var menuButtonIcon = document.createElement("span");
var menuButtonText = document.createTextNode(" Share ");
var modalHolder = document.createElement("div");
var modal = document.createElement("div");
var header = document.createElement("div");
var close = document.createElement("span");
var title = document.createElement("span");
var list = document.createElement("div");
var twitterMenuItem = document.createElement("div");
var twitterLink = document.createElement("a");
var twitterIcon = document.createElement("span");
var twitterMenuItemText = document.createElement("div");
var twitterMenuItemHeading = document.createElement("span");
var facebookMenuItem = document.createElement("div");
var facebookLink = document.createElement("a");
var facebookIcon = document.createElement("span");
var facebookMenuItemText = document.createElement("div");
var facebookMenuItemHeading = document.createElement("span");
var googlePlusMenuItem = document.createElement("div");
var googlePlusLink = document.createElement("a");
var googlePlusIcon = document.createElement("span");
var googlePlusMenuItemText = document.createElement("div");
var googlePlusMenuItemHeading = document.createElement("span");

// Check whether the new or the old repository design is active and set the link for Twitter

if (document.getElementsByClassName("repository-meta-content")[0]) {
  var description = document.getElementsByClassName("repository-meta-content")[0].innerText;

  twitterLink.href = "https://twitter.com/intent/tweet?text=" + document.title + "%20\u2013%20" + description + "%20" + document.location;
} else if (document.getElementsByClassName("repository-description")[0]) {
  var description = document.getElementsByClassName("repository-description")[0].innerText;

  twitterLink.href = "https://twitter.com/intent/tweet?text=" + document.title + "%20\u2013%20" + description + "%20" + document.location;
} else {
  twitterLink.href = "https://twitter.com/intent/tweet?text=" + document.title + "%20" + document.location;
}

// Set the links for Facebook and Google+ and configure all links

twitterLink.target = "_blank";
twitterLink.style.color = "#333";
twitterLink.style.textDecoration = "none";
facebookLink.href = "https://www.facebook.com/sharer/sharer.php?u=" + document.location;
facebookLink.target = "_blank";
facebookLink.style.color = "#333";
facebookLink.style.textDecoration = "none";
googlePlusLink.href = "https://plus.google.com/share?url=" + document.location;
googlePlusLink.target = "_blank";
googlePlusLink.style.color = "#333";
googlePlusLink.style.textDecoration = "none";

// Configure all elements

menu.className = "select-menu js-menu-container js-select-menu";
liButton.className = "btn btn-sm select-menu-button js-menu-target";
liButton.setAttribute("role", "button");
menuButton.className = "js-select-button";
menuButtonIcon.className = "octicon octicon-file-symlink-file";
modalHolder.className = "select-menu-modal-holder";
modal.className = "select-menu-modal js-menu-content";
header.className = "select-menu-header";
close.className = "octicon octicon-x js-menu-close";
close.setAttribute("role", "button");
title.className = "select-menu-title";
title.innerHTML = "Share this repository on";
list.className = "select-menu-list js-navigation-container";
list.setAttribute("role", "menu");
twitterMenuItem.className = "select-menu-item js-navigation-item";
twitterMenuItem.setAttribute("role", "menuitem");
twitterMenuItem.id = "twitterGitShareMenuItem";
twitterMenuItem.addEventListener("mouseover", function() { document.getElementById("twitterGitShareMenuItem").style.background = "#2b79bc"; document.getElementById("twitterGitShareIcon").innerHTML = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Larry" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="1.844 0 16 16" enable-background="new 1.844 0 16 16" xml:space="preserve"><path id="Larry_1_" fill="#FFFFFF" d="M17.844,3.039c-0.588,0.261-1.221,0.438-1.884,0.517c0.678-0.406,1.198-1.049,1.442-1.814c-0.634,0.375-1.337,0.648-2.085,0.795C14.719,1.898,13.868,1.5,12.923,1.5c-1.813,0-3.284,1.469-3.284,3.281c0,0.258,0.03,0.508,0.085,0.749c-2.728-0.137-5.147-1.443-6.766-3.43C2.675,2.585,2.513,3.149,2.513,3.75c0,1.139,0.58,2.145,1.46,2.733c-0.538-0.017-1.044-0.164-1.487-0.41c0,0.014,0,0.026,0,0.042c0,1.589,1.131,2.916,2.632,3.217C4.844,9.406,4.555,9.446,4.256,9.446c-0.211,0-0.417-0.021-0.618-0.058c0.417,1.303,1.629,2.252,3.066,2.278c-1.123,0.881-2.539,1.405-4.076,1.405c-0.265,0-0.526-0.016-0.783-0.046c1.453,0.932,3.179,1.475,5.032,1.475c6.04,0,9.341-5.002,9.341-9.338c0-0.143-0.003-0.284-0.011-0.424C16.848,4.276,17.405,3.696,17.844,3.039z"/></svg>'; document.getElementById("twitterGitShareMenuItemHeading").style.color = "#fff"; });
twitterMenuItem.addEventListener("mouseout", function() { document.getElementById("twitterGitShareMenuItem").style.background = "#fff"; document.getElementById("twitterGitShareIcon").innerHTML = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Larry" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="1.844 0 16 16" enable-background="new 1.844 0 16 16" xml:space="preserve"><path id="Larry_1_" fill="#333333" d="M17.844,3.039c-0.588,0.261-1.221,0.438-1.884,0.517c0.678-0.406,1.198-1.049,1.442-1.814c-0.634,0.375-1.337,0.648-2.085,0.795C14.719,1.898,13.868,1.5,12.923,1.5c-1.813,0-3.284,1.469-3.284,3.281c0,0.258,0.03,0.508,0.085,0.749c-2.728-0.137-5.147-1.443-6.766-3.43C2.675,2.585,2.513,3.149,2.513,3.75c0,1.139,0.58,2.145,1.46,2.733c-0.538-0.017-1.044-0.164-1.487-0.41c0,0.014,0,0.026,0,0.042c0,1.589,1.131,2.916,2.632,3.217C4.844,9.406,4.555,9.446,4.256,9.446c-0.211,0-0.417-0.021-0.618-0.058c0.417,1.303,1.629,2.252,3.066,2.278c-1.123,0.881-2.539,1.405-4.076,1.405c-0.265,0-0.526-0.016-0.783-0.046c1.453,0.932,3.179,1.475,5.032,1.475c6.04,0,9.341-5.002,9.341-9.338c0-0.143-0.003-0.284-0.011-0.424C16.848,4.276,17.405,3.696,17.844,3.039z"/></svg>'; document.getElementById("twitterGitShareMenuItemHeading").style.color = "#333"; });
twitterMenuItem.style.borderRadius = "0";
twitterMenuItem.style.borderBottom = "1px solid #eee";
twitterIcon.className = "octicon select-menu-item-icon";
twitterIcon.id = "twitterGitShareIcon";
twitterIcon.innerHTML = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Larry" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="1.844 0 16 16" enable-background="new 1.844 0 16 16" xml:space="preserve"><path id="Larry_1_" fill="#333333" d="M17.844,3.039c-0.588,0.261-1.221,0.438-1.884,0.517c0.678-0.406,1.198-1.049,1.442-1.814c-0.634,0.375-1.337,0.648-2.085,0.795C14.719,1.898,13.868,1.5,12.923,1.5c-1.813,0-3.284,1.469-3.284,3.281c0,0.258,0.03,0.508,0.085,0.749c-2.728-0.137-5.147-1.443-6.766-3.43C2.675,2.585,2.513,3.149,2.513,3.75c0,1.139,0.58,2.145,1.46,2.733c-0.538-0.017-1.044-0.164-1.487-0.41c0,0.014,0,0.026,0,0.042c0,1.589,1.131,2.916,2.632,3.217C4.844,9.406,4.555,9.446,4.256,9.446c-0.211,0-0.417-0.021-0.618-0.058c0.417,1.303,1.629,2.252,3.066,2.278c-1.123,0.881-2.539,1.405-4.076,1.405c-0.265,0-0.526-0.016-0.783-0.046c1.453,0.932,3.179,1.475,5.032,1.475c6.04,0,9.341-5.002,9.341-9.338c0-0.143-0.003-0.284-0.011-0.424C16.848,4.276,17.405,3.696,17.844,3.039z"/></svg>';
twitterMenuItemText.className = "select-menu-item-text";
twitterMenuItemHeading.id = "twitterGitShareMenuItemHeading";
twitterMenuItemHeading.className = "select-menu-item-heading";
twitterMenuItemHeading.innerHTML = " Twitter";
facebookMenuItem.className = "select-menu-item js-navigation-item";
facebookMenuItem.id = "facebookGitShareMenuItem";
facebookMenuItem.setAttribute("role", "menuitem");
facebookMenuItem.addEventListener("mouseover", function() { document.getElementById("facebookGitShareMenuItem").style.background = "#2b79bc"; document.getElementById("facebookGitShareIcon").innerHTML = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Facebook" fill="#FFFFFF" d="M15.117,0l-14.234,0c-0.488,0 -0.883,0.395 -0.883,0.883l0,14.234c0,0.488 0.395,0.883 0.883,0.883l7.663,0l0,-6.196l-2.085,0l0,-2.415l2.085,0l0,-1.781c0,-2.066 1.262,-3.191 3.106,-3.191c0.883,0 1.642,0.065 1.863,0.095l0,2.159l-1.279,0.001c-1.002,0 -1.196,0.476 -1.196,1.176l0,1.541l2.391,0l-0.311,2.415l-2.08,0l0,6.196l4.077,0c0.488,0 0.883,-0.395 0.883,-0.883l0,-14.234c0,-0.488 -0.395,-0.883 -0.883,-0.883Z"/></svg>'; document.getElementById("facebookGitShareMenuItemHeading").style.color = "#fff"; });
facebookMenuItem.addEventListener("mouseout", function() { document.getElementById("facebookGitShareMenuItem").style.background = "#fff"; document.getElementById("facebookGitShareIcon").innerHTML = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Facebook" fill="#333333" d="M15.117,0l-14.234,0c-0.488,0 -0.883,0.395 -0.883,0.883l0,14.234c0,0.488 0.395,0.883 0.883,0.883l7.663,0l0,-6.196l-2.085,0l0,-2.415l2.085,0l0,-1.781c0,-2.066 1.262,-3.191 3.106,-3.191c0.883,0 1.642,0.065 1.863,0.095l0,2.159l-1.279,0.001c-1.002,0 -1.196,0.476 -1.196,1.176l0,1.541l2.391,0l-0.311,2.415l-2.08,0l0,6.196l4.077,0c0.488,0 0.883,-0.395 0.883,-0.883l0,-14.234c0,-0.488 -0.395,-0.883 -0.883,-0.883Z"/></svg>'; document.getElementById("facebookGitShareMenuItemHeading").style.color = "#333"; });
facebookMenuItem.style.borderRadius = "0";
facebookMenuItem.style.borderBottom = "1px solid #eee";
facebookIcon.className = "octicon select-menu-item-icon";
facebookIcon.id = "facebookGitShareIcon";
facebookIcon.innerHTML = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Facebook" fill="#333333" d="M15.117,0l-14.234,0c-0.488,0 -0.883,0.395 -0.883,0.883l0,14.234c0,0.488 0.395,0.883 0.883,0.883l7.663,0l0,-6.196l-2.085,0l0,-2.415l2.085,0l0,-1.781c0,-2.066 1.262,-3.191 3.106,-3.191c0.883,0 1.642,0.065 1.863,0.095l0,2.159l-1.279,0.001c-1.002,0 -1.196,0.476 -1.196,1.176l0,1.541l2.391,0l-0.311,2.415l-2.08,0l0,6.196l4.077,0c0.488,0 0.883,-0.395 0.883,-0.883l0,-14.234c0,-0.488 -0.395,-0.883 -0.883,-0.883Z"/></svg>';
facebookMenuItemText.className = "select-menu-item-text";
facebookMenuItemHeading.className = "select-menu-item-heading";
facebookMenuItemHeading.id = "facebookGitShareMenuItemHeading";
facebookMenuItemHeading.innerHTML = " Facebook";
googlePlusMenuItem.className = "select-menu-item js-navigation-item";
googlePlusMenuItem.id = "googlePlusGitShareMenuItem";
googlePlusMenuItem.setAttribute("role", "menuitem");
googlePlusMenuItem.addEventListener("mouseover", function() { document.getElementById("googlePlusGitShareMenuItem").style.background = "#2b79bc"; document.getElementById("googlePlusGitShareIcon").innerHTML = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Google+" fill="#FFFFFF" d="M10.35,7c0.067,0.357 0.103,0.73 0.103,1.12c0,3.047 -2.04,5.213 -5.12,5.213c-2.946,0 -5.333,-2.386 -5.333,-5.333c0,-2.947 2.387,-5.333 5.333,-5.333c1.44,0 2.644,0.53 3.567,1.39l-1.504,1.503l0,-0.003c-0.559,-0.534 -1.269,-0.807 -2.063,-0.807c-1.76,0 -3.19,1.487 -3.19,3.247c0,1.76 1.43,3.25 3.19,3.25c1.597,0 2.684,-0.914 2.907,-2.167l-2.907,0l0,-2.08l5.017,0ZM14.333,7.333l0,-1.666l-1.333,0l0,1.666l-1.667,0l0,1.334l1.667,0l0,1.666l1.333,0l0,-1.666l1.667,0l0,-1.334l-1.667,0Z"/></svg>'; document.getElementById("googlePlusGitShareMenuItemHeading").style.color = "#fff"; });
googlePlusMenuItem.addEventListener("mouseout", function() { document.getElementById("googlePlusGitShareMenuItem").style.background = "#fff"; document.getElementById("googlePlusGitShareIcon").innerHTML = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Google+" fill="#333333" d="M10.35,7c0.067,0.357 0.103,0.73 0.103,1.12c0,3.047 -2.04,5.213 -5.12,5.213c-2.946,0 -5.333,-2.386 -5.333,-5.333c0,-2.947 2.387,-5.333 5.333,-5.333c1.44,0 2.644,0.53 3.567,1.39l-1.504,1.503l0,-0.003c-0.559,-0.534 -1.269,-0.807 -2.063,-0.807c-1.76,0 -3.19,1.487 -3.19,3.247c0,1.76 1.43,3.25 3.19,3.25c1.597,0 2.684,-0.914 2.907,-2.167l-2.907,0l0,-2.08l5.017,0ZM14.333,7.333l0,-1.666l-1.333,0l0,1.666l-1.667,0l0,1.334l1.667,0l0,1.666l1.333,0l0,-1.666l1.667,0l0,-1.334l-1.667,0Z"/></svg>'; document.getElementById("googlePlusGitShareMenuItemHeading").style.color = "#333"; });
googlePlusIcon.className = "octicon select-menu-item-icon";
googlePlusIcon.id = "googlePlusGitShareIcon";
googlePlusIcon.innerHTML = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Google+" fill="#333333" d="M10.35,7c0.067,0.357 0.103,0.73 0.103,1.12c0,3.047 -2.04,5.213 -5.12,5.213c-2.946,0 -5.333,-2.386 -5.333,-5.333c0,-2.947 2.387,-5.333 5.333,-5.333c1.44,0 2.644,0.53 3.567,1.39l-1.504,1.503l0,-0.003c-0.559,-0.534 -1.269,-0.807 -2.063,-0.807c-1.76,0 -3.19,1.487 -3.19,3.247c0,1.76 1.43,3.25 3.19,3.25c1.597,0 2.684,-0.914 2.907,-2.167l-2.907,0l0,-2.08l5.017,0ZM14.333,7.333l0,-1.666l-1.333,0l0,1.666l-1.667,0l0,1.334l1.667,0l0,1.666l1.333,0l0,-1.666l1.667,0l0,-1.334l-1.667,0Z"/></svg>';
googlePlusMenuItemText.className = "select-menu-item-text";
googlePlusMenuItemHeading.className = "select-menu-item-heading";
googlePlusMenuItemHeading.id = "googlePlusGitShareMenuItemHeading";
googlePlusMenuItemHeading.innerHTML = "Google+";

// Append all elements to their parent elements

twitterMenuItemText.appendChild(twitterMenuItemHeading);
twitterMenuItem.appendChild(twitterIcon);
twitterMenuItem.appendChild(twitterMenuItemText);
twitterLink.appendChild(twitterMenuItem);
facebookMenuItemText.appendChild(facebookMenuItemHeading);
facebookMenuItem.appendChild(facebookIcon);
facebookMenuItem.appendChild(facebookMenuItemText);
facebookLink.appendChild(facebookMenuItem);
googlePlusMenuItemText.appendChild(googlePlusMenuItemHeading);
googlePlusMenuItem.appendChild(googlePlusIcon);
googlePlusMenuItem.appendChild(googlePlusMenuItemText);
googlePlusLink.appendChild(googlePlusMenuItem);
list.appendChild(twitterLink);
list.appendChild(facebookLink);
list.appendChild(googlePlusLink);
header.appendChild(close);
header.appendChild(title);
modal.appendChild(header);
modal.appendChild(list);
modalHolder.appendChild(modal);
menuButton.appendChild(menuButtonIcon);
menuButton.appendChild(menuButtonText);
liButton.appendChild(menuButton);
menu.appendChild(liButton);
menu.appendChild(modalHolder);
li.appendChild(menu);

// Append the "Share" button to the page (when it is a repository page)

if (document.getElementsByClassName("pagehead-actions")[0] && document.title != "Your Followers" && document.title != "You're following") {
  document.getElementsByClassName("pagehead-actions")[0].appendChild(li);
}
