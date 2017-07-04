// alert(123);

// $("#hot-word-item").on('click', function(){
//     console.log("hot-word-item is click");
//     // alert(123);
//     // chrome.runtime.connect("options_ui");
// });
//  chrome.extension.onRequest.addListener(
//         function(request, sender, sendResponse){
//             if (request.status == "onload"){
//                 chrome.storage.local.get(["adshield", "efshield", "bbstyle"], function(items) {
//                     console.log(items);

//                     var sendContent = {
//                         shieldInfo:{
//                             adshield:{
//                                 bShield:items.adshield
//                             },
//                             effectshield:{
//                                 bShield:items.efshield
//                             },
//                             bbstyle:{
//                                 bstyle:items.bbstyle
//                             }
//                         }
//                     };

//                     sendResponse(sendContent);
//                 });
//             }
//             else{
//                 sendResponse({shieldInfo:{}});
//             }
//     });

window.onload = function() {
    // console.log("window onload");

    chrome.storage.local.get(["adshield", "efshield", "bbstyle"], function(items) {
        console.log(items);
        $("#adshield").attr("checked", items.adshield);
        $("#efshield").attr("checked", items.efshield);
        $("#bbstyle").attr("checked", items.bbstyle);
    });

    $("#hot-word-item").on('click', function() {
        console.log("hot-word-item is click");
        // alert(123);
        if (chrome.runtime.openOptionsPage) {
            // New way to open options pages, if supported (Chrome 42+).
            chrome.runtime.openOptionsPage();
        } else {
            // Reasonable fallback.
            window.open(chrome.runtime.getURL('options.html'));
        }
    });

    // chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
    //     console.log("chrome.extension.onMessage.addListener");
    // });

    $("#adshield").bind("click", function() {
        console.log("adshield click");
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            var tab = tabs[0];
            var sendContent = {
                message:{
                    adshield:{
                        bShield:$("#adshield").is(":checked")
                    }
                }
            };
            chrome.tabs.sendRequest(tab.id, sendContent, function handler(response) {
                console.log("this is request");
            });
        });
        // console.log($("#adshield").is(":checked"));
        chrome.storage.local.set({ "adshield": $("#adshield").is(":checked") }, function() {});

        // chrome.runtime.sendMessage({ adshield: true });
    });

    $("#efshield").bind("click", function() {
        console.log("efshield click");
        chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
            var tab = tabs[0];
            var sendContent = {
                message:{
                    effectshield:{
                        bShield:$("#efshield").is(":checked")
                    }
                }
            };

            chrome.tabs.sendRequest(tab.id, sendContent, function handler(response){
                console.log("this is efshield response");
            });
        });

        chrome.storage.local.set({ "efshield": $('#efshield').is(":checked") }, function() {});
    });

    $("#bbstyle").bind("click", function() {
        console.log("bbstyle click");
        chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
            var tab = tabs[0];
            var sendContent = {
                message:{
                    bbstyle:{
                        bstyle:$("#bbstyle").is(":checked")
                    }
                }
            };

            chrome.tabs.sendRequest(tab.id, sendContent, function handler(response){
                console.log("this is bbstyle response");
            });
        });

        chrome.storage.local.set({ "bbstyle": $('#bbstyle').is(":checked") }, function() {});
    });
}