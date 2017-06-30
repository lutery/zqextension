// alert(123);

function adShieldNoMaxScreen(){

    //算法二
    if (false == $("#js-room-super-panel").hasClass("adShield")){
        var chatAdHeight = $("#js-activity-show").height();
        var chatAdPaddingTop = parseInt($("#js-activity-show").css('padding-top'));
        var chatAdPaddingBottom = parseInt($("#js-activity-show").css('padding-bottom'));

        console.log('chatAdHeight=' + chatAdHeight + ', chatAdPaddingTop=' + chatAdPaddingTop + ", chatAdPaddingBottom=" + chatAdPaddingBottom);

        var totalADHeight = chatAdHeight + chatAdPaddingTop + chatAdPaddingBottom;

        console.log('totalADHeight=' + totalADHeight);

        $("body").addClass("zqadshield");
        $("#js-room-super-panel").addClass("adShield");

        console.log('js-right-chat-layer height=' + $("#js-right-chat-panel .js-right-chat-layer").height());

        var totalChatHeight = $("#js-right-chat-panel .js-right-chat-layer").height() + totalADHeight;

        console.log('totalChatHeight=' + totalChatHeight);


        $("#js-right-chat-panel .js-right-chat-layer").height(totalChatHeight);
        $("#js-right-chat-panel .slimScrollDiv").height(totalChatHeight);
        $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(totalChatHeight);

        $.cookie('nomaxscreen', totalADHeight);
    }
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
    // 全屏状态下采用css样式的方式进行修改
    $("body").addClass("zqadshield");
    $("#js-room-super-panel").addClass("adShield");
}

function adNoMaxScreen(){

    // 算法二
    if ($("#js-room-super-panel").hasClass("adShield")){
        var totalChatHeight = $("#js-right-chat-panel .js-right-chat-layer").height();
        var totalADHeight = $.cookie('nomaxscreen');
        var originalChatHeight = totalChatHeight - totalADHeight;

        $("#js-right-chat-panel .js-right-chat-layer").height(originalChatHeight);
        $("#js-right-chat-panel .slimScrollDiv").height(originalChatHeight);
        $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(originalChatHeight);

        $("body").removeClass("zqadshield");
        $("#js-room-super-panel").removeClass("adShield");
    }
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
    // 全屏下采用移除样式的方式进行广告的显示
    $("body").removeClass("zqadshield");
    $("#js-room-super-panel").removeClass("adShield");
}

function effectShield(){
    $("body").addClass("shield-effect");
}

function effectDisplay(){
    $("body").removeClass("shield-effect");
}

function bbstyleopen(){
    $("#js-room-super-panel").addClass("bstyle");
}

function bbstyleclose(){
    $("#js-room-super-panel").removeClass("bstyle");
}

//chat-flash-gg
// $(".live-chat-content .chat-flash-gg").css('display', 'none');
window.onload = function() {
    console.log("window.onload = function(){");

    var chatAdHeight = $("#js-activity-show").height();
    var chatAdPaddingTop = parseInt($("#js-activity-show").css('padding-top'));
    var chatAdPaddingBottom = parseInt($("#js-activity-show").css('padding-bottom'));

    console.log('chatAdHeight=' + chatAdHeight + ', chatAdPaddingTop=' + chatAdPaddingTop + ", chatAdPaddingBottom=" + chatAdPaddingBottom);

    var totalADHeight = chatAdHeight + chatAdPaddingTop + chatAdPaddingBottom;
    $.cookie('nomaxscreen', totalADHeight);

    var heightFansList = $('.fans-list.guard-list.js-fans-list-panel').height();

    console.log('heightFansList=' + heightFansList);
    $.cookie('heightFansList', heightFansList);

    var heightuserOperate = $('#js-chat-control-panel').height();
    
    console.log('heightuserOperate=' + heightuserOperate);
    $.cookie('heightuserOperate', heightuserOperate);
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
            else if ('effectshield' in request.message){
                var effectshield = request.message.effectshield;

                if (effectshield.bShield){
                    effectShield();
                }
                else{
                    effectDisplay();
                }
            }
            else if ('bbstyle' in request.message){
                var bbstyle = request.message.bbstyle;

                if (bbstyle.bstyle){
                    bbstyleopen();
                }
                else{
                    bbstyleclose();
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