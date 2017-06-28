// alert(123);

function adShieldNoMaxScreen(){

    //算法二
    var chatAdHeight = $("#js-activity-show").height();
    var chatAdPaddingTop = parseInt($("#js-activity-show").css('padding-top'));
    var chatAdPaddingBottom = parseInt($("#js-activity-show").css('padding-bottom'));

    console.log('chatAdHeight=' + chatAdHeight + ', chatAdPaddingTop=' + chatAdPaddingTop + ", chatAdPaddingBottom=" + chatAdPaddingBottom);

    var totalADHeight = chatAdHeight + chatAdPaddingTop + chatAdPaddingBottom;

    $("body").addClass("zqadshield");

    var totalChatHeight = $("#js-right-chat-panel .js-right-chat-layer").height() + totalADHeight;

    $("#js-right-chat-panel .js-right-chat-layer").height(totalChatHeight);
    $("#js-right-chat-panel .slimScrollDiv").height(totalChatHeight);
    $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(totalChatHeight);

    $.cookie('nomaxscreen', totalADHeight);

    // 算法一
    // $("body").addClass("zqadshield");

    // //获取直播区域的高度
    // var LRCHeight = $(".live-room-content").height();

    // //获取粉丝列表的高度
    // var fangsHeight = $("#js-right-chat-panel .js-fans-list-panel").height();

    // //获取聊天输入框的高度
    // var controlHeight = $("#js-chat-control-panel").height();

    // //计算聊天信息栏在隐藏广告后的高度
    // var chatHeight = LRCHeight - fangsHeight - controlHeight;


    // $.cookie('LRCHeight', LRCHeight);
    // $.cookie('fangsHeight', fangsHeight);
    // $.cookie('controlHeight', controlHeight);
    // $.cookie('chatHeight', $("#js-right-chat-panel .js-right-chat-layer").height());
    // $.cookie('chatHeightSlim', $("#js-right-chat-panel .slimScrollDiv").height())
    // $.cookie('chatHeightSlimMsg', $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height());

    // console.log("chatHeight="+$("#js-right-chat-panel .js-right-chat-layer").height());

    // //配置聊天信息栏的新高度
    // $("#js-right-chat-panel .js-right-chat-layer").height(chatHeight);
    // $("#js-right-chat-panel .slimScrollDiv").height(chatHeight);
    // $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(chatHeight);
}

function adShieldMaxScreen(){

}

function adNoMaxScreen(){

    // 算法二
    var totalChatHeight = $("#js-right-chat-panel .js-right-chat-layer").height();
    var totalADHeight = $.cookie('nomaxscreen');
    var originalChatHeight = totalChatHeight - totalADHeight;

    $("#js-right-chat-panel .js-right-chat-layer").height(originalChatHeight);
    $("#js-right-chat-panel .slimScrollDiv").height(originalChatHeight);
    $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(originalChatHeight);

    $("body").removeClass("zqadshield");
    // 算法一
    // $("body").removeClass("zqadshield");

    // // var LRCHeight = $.cookie('LRCHeight');
    // // var fangsHeight = $.cookie('fangsHeight');
    // // var controlHeight = $.cookie('controlHeight');
    // var chatHeight = $.cookie('chatHeight');
    // var chatHeightSlim = $.cookie("#js-right-chat-panel .slimScrollDiv");
    // var chatHeightSlimMsg = $.cookie("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll");

    // if (chatHeight != null) {
    //     //配置聊天信息栏的新高度
    //     $("#js-right-chat-panel .js-right-chat-layer").height(chatHeight);
    //     $("#js-right-chat-panel .slimScrollDiv").height(chatHeightSlim);
    //     $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(chatHeightSlimMsg);
    // }
}

function adMaxScreen(){

}

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
            if ('adshield' in request.message) {
                var adshield = request.message.adshield;

                if (adshield.bShield) {
                    if ($("body").hasClass("maxScrean")){
                        adShieldMaxScreen();
                    }
                    else{
                        adShieldNoMaxScreen();
                    }
                } 
                else {
                    if ($("body").hasClass("maxScrean")){
                        adMaxScreen();
                    }
                    else{
                        adNoMaxScreen();
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