var version = 1
var latest = version
var current = version
var element = document.getElementById("text");

if current == latest {
  element.innerHTML = "You are on the latest version!";
} else {
  element.innerHTML = "You are not on the latest version. Please go <a href="https://tinyurl.com/nknew"> to update to the latest version.";
}
