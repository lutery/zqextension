// alert(123);

//chat-flash-gg
// $(".live-chat-content .chat-flash-gg").css('display', 'none');
window.onload = function(){
    // alert(123);
    //隐藏聊天框上部分广告
     $(".live-chat-content .chat-flash-gg").css('display', 'none');

     //上部分广告区占用区域
     $("#js-activity-show").css('display', 'none');

     //获取直播区域的高度
     var LRCHeight = $(".live-room-content").height();

     //获取粉丝列表的高度
     var fangsHeight = $("#js-right-chat-panel .js-fans-list-panel").height();

     //获取聊天输入框的高度
     var controlHeight = $("#js-chat-control-panel").height();

     //计算聊天信息栏在隐藏广告后的高度
     var chatHeight = LRCHeight - fangsHeight - controlHeight;

     //配置聊天信息栏的新高度
     $("#js-right-chat-panel .js-right-chat-layer").height(chatHeight);
     $("#js-right-chat-panel .slimScrollDiv").height(chatHeight);
     $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(chatHeight);

     //detail:message sender sendResponse
     // message(any):adshield efshield bbstyle
     // adshield:{bShield:, LRCHeight:, fangsHeight:, controlHeight:, chatHeight:}
    chrome.extension.onMessage.addListener(function(detail){
         
         if ('adshield' in detail.message){
            var adshield = detail.message.adshield;

            if (adshield.bShield){
                 //获取直播区域的高度
                var LRCHeight = $(".live-room-content").height();

                //获取粉丝列表的高度
                var fangsHeight = $("#js-right-chat-panel .js-fans-list-panel").height();

                //获取聊天输入框的高度
                var controlHeight = $("#js-chat-control-panel").height();

                //计算聊天信息栏在隐藏广告后的高度
                var chatHeight = LRCHeight - fangsHeight - controlHeight;

                //配置聊天信息栏的新高度
                $("#js-right-chat-panel .js-right-chat-layer").height(chatHeight);
                $("#js-right-chat-panel .slimScrollDiv").height(chatHeight);
                $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(chatHeight);
            }
            else{
                //配置聊天信息栏的新高度
                $("#js-right-chat-panel .js-right-chat-layer").height(adshield.chatHeight);
                $("#js-right-chat-panel .slimScrollDiv").height(adshield.chatHeight);
                $("#js-right-chat-panel .slimScrollDiv .js-chat-msg-scroll").height(adshield.chatHeight);
            }
         }

         if ('efshield' in detail.message){

         }

         if ('bbstyle' in detail.message){

         }
    });
}

// function checkMaxScrean(){
//     if ($("body").hasClass('maxScrean')){

//     }
// }

// window.setInterval(checkMaxScrean, 1000);