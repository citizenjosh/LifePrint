function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'lp: Search LifePrint for %s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  // Suggestion code will end up here.
});

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(searchedWord) {
  navigate("https://lifeprint.com/"+"asl101/pages-signs/" + searchedWord.substring(0,1) + "/" + searchedWord + ".htm");
});

