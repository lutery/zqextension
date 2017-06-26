// alert(123);

//chat-flash-gg
// $(".live-chat-content .chat-flash-gg").css('display', 'none');
window.onload = function() {
    console.log("window.onload = function(){");
    // alert(123);
    //隐藏聊天框上部分广告
    //  $(".live-chat-content .chat-flash-gg").css('display', 'none');

    //  //上部分广告区占用区域
    //  $("#js-activity-show").css('display', 'none');

    //  //获取直播区域的高度
    //  var LRCHeight = $(".live-room-content").height();

    //  //获取粉丝列表的高度
    //  var fangsHeight = $("#js-right-chat-panel .js-fans-list-panel").height();

    //  //获取聊天输入框的高度
    //  var controlHeight = $("#js-chat-control-panel").height();

    //  //计算聊天信息栏在隐藏广告后的高度
    //  var chatHeight = LRCHeight - fangsHeight - controlHeight;

    //  //配置聊天信息栏的新高度
    //  $("#js-right-chat-panel .js-right-chat-layer").height(chatHeight);
    //  $("#js-right-chat-panel .slimScrollDiv").height(chatHeight);
    //  $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(chatHeight);

    //detail:message sender sendResponse
    // message(any):adshield efshield bbstyle
    // adshield:{bShield:}
    chrome.extension.onRequest.addListener(
        function(request, sender, sendResponse) {
            console.log("this is onRequest");
            if ('adshield' in detail.message) {
                var adshield = detail.message.adshield;

                if (adshield.bShield) {
                    $("body").addClass("zqadshield");

                    //获取直播区域的高度
                    var LRCHeight = $(".live-room-content").height();

                    //获取粉丝列表的高度
                    var fangsHeight = $("#js-right-chat-panel .js-fans-list-panel").height();

                    //获取聊天输入框的高度
                    var controlHeight = $("#js-chat-control-panel").height();

                    //计算聊天信息栏在隐藏广告后的高度
                    var chatHeight = LRCHeight - fangsHeight - controlHeight;


                    $.cookie('LRCHeight', LRCHeight);
                    $.cookie('fangsHeight', fangsHeight);
                    $.cookie('controlHeight', controlHeight);
                    $.cookie('chatHeight', $("#js-right-chat-panel .js-right-chat-layer"));

                    //配置聊天信息栏的新高度
                    $("#js-right-chat-panel .js-right-chat-layer").height(chatHeight);
                    $("#js-right-chat-panel .slimScrollDiv").height(chatHeight);
                    $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(chatHeight);
                } else {
                    $("body").removeClass("zqadshield");

                    var LRCHeight = $.cookie('LRCHeight');
                    var fangsHeight = $.cookie('fangsHeight');
                    var controlHeight = $.cookie('controlHeight');
                    var chatHeight = $.cookie('chatHeight');

                    if (LRCHeight != null) {
                        //获取直播区域的高度
                        $(".live-room-content").height(LRCHeight);
                    }

                    if (fangsHeight != null) {
                        //获取粉丝列表的高度
                        $("#js-right-chat-panel .js-fans-list-panel").height(fangsHeight);
                    }

                    if (controlHeight != null) {
                        //获取聊天输入框的高度
                        $("#js-chat-control-panel").height(controlHeight);
                    }

                    if (chatHeight != null) {
                        //配置聊天信息栏的新高度
                        $("#js-right-chat-panel .js-right-chat-layer").height(chatHeight);
                        $("#js-right-chat-panel .slimScrollDiv").height(chatHeight);
                        $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(chatHeight);
                    }
                }
            }
        }
    );
}

// function checkMaxScrean(){
//     if ($("body").hasClass('maxScrean')){

//     }
// }

// window.setInterval(checkMaxScrean, 1000);