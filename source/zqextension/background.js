window.onload = function() {
    chrome.extension.onRequest.addListener(
        function(request, sender, sendResponse) {
            console.log("this is addListener");
            console.log(request.status);
            if (request.status == "onload") {
                chrome.storage.local.get(["adshield", "efshield", "bbstyle", "yhstyle"], function(items) {
                    console.log(items);

                    var sendContent = {
                        shieldInfo: {
                            adshield: {
                                bShield: items.adshield
                            },
                            effectshield: {
                                bShield: items.efshield
                            },
                            bbstyle: {
                                bstyle: items.bbstyle
                            },
                            yhstyle: {
                                bshieldyh: items.yhstyle
                            }
                        }
                    };

                    sendResponse(sendContent);
                });
            } else {
                sendResponse({ shieldInfo: {} });
            }
        });

    console.log("this is background");
}