// Made with <3 in Germany

var li = document.createElement("li");

var span = document.createElement("span");
span.className = "octicon octicon-file-symlink-file";
var text = document.createTextNode(" Share");

if (document.getElementsByClassName("repository-description")[0]) {
  var description = document.getElementsByClassName("repository-description")[0].innerText;
}

var button = document.createElement("a");
button.href = "https://twitter.com/intent/tweet?text=" + document.title + "%20-%20" + description + "%20" + document.location;
button.target = "_blank";
button.className = "btn btn-sm btn-without-count";
button.title = "Share this repository on Twitter";

button.appendChild(span);
button.appendChild(text);

li.appendChild(button);

if (document.getElementsByClassName("pagehead-actions")[0]) {
  document.getElementsByClassName("pagehead-actions")[0].appendChild(li);
}
