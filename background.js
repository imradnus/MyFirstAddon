/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "T and T":
      return "http://grab-bucks.blogspot.in/";
  case "Swag loots":
	return "http://swagloots.wordpress.com/";
  case "hotstar":
	return "https://hotstar.com";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);

