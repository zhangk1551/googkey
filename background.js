chrome.commands.onCommand.addListener(function (command) {
        if (command == "google-search") {
                chrome.tabs.executeScript({
                        code: "window.getSelection().toString();"
                }, function (selection) {
                        var newURL = "https://www.google.com/search?q=" + selection;
                        chrome.tabs.create({url: newURL});
                });
        }
});
