			console.log("start router.js");

			var baseURL = "http://lifeprint.com/";
			var href = document.location.href;
			var searchedWord = href.substr(href.lastIndexOf("/")+1);
			var firstLetterOfSearchedWord = searchedWord.substr(0,1);
			var newURL = baseURL + "asl101/pages-signs/" + firstLetterOfSearchedWord + "/" + searchedWord +".htm";

			redirectIfNoErrorsNotifyIfThereAre( newURL );




			/**
			 * Performs an XMLHttpRequest to see if the page is available
			 *
			 * @param urlToTest Function If the response from fetching url has a
			 *     HTTP status of 200, this function is called with a JSON decoded
			 *     response.  Otherwise, this function is called with null.
			 * @reference http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
			 */
			function redirectIfNoErrorsNotifyIfThereAre(urlToTest) {
			  var req = new XMLHttpRequest();
			  req.onreadystatechange = function() {
			    if (req.readyState==4) {
			      console.log("HTTP Status Code:" + req.status);
			      if (req.status==200) {
debugger;
			        window.location.href = newURL;
/*			        window.location.href = baseURL;

					var readyStateCheckInterval = setInterval(function() {
					    if (document.readyState === "complete") {
					        clearInterval(readyStateCheckInterval);
					        alert("window.length: "+window.getElementById('rbottom'));
					        //window.frames[1].frames["rbottom"].location.href = newURL;
					        parent.rbottom.location = newURL;
					    }
					}, 10);
*/
			      } else {
			        alert("Sorry, no results.\nBringing you to the home page.");
			        window.location.href = baseURL;
			      }
			    }
			  }
			  console.log("Request " + urlToTest);
			  req.open("GET", urlToTest, true);
			  req.send();
			}

		//@ sourceURL=rerouter.js
