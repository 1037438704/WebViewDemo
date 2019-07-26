$(document).ready(function(){
    var activity;       //活动详情id

    // .addbcIpt input得到焦点左对齐失去焦点右对齐
    $(".addbcIpt input").on("tap",function(){
        $(this).addClass("mui-input-clear");
        $(this).css("text-align","left");
    });
    $(".addbcIpt input").blur(function(){
        $(this).removeClass("mui-input-clear");
        $(this).css("text-align","right");
    });
    

    // 勾选绑卡协议
    $(".bottomBtn p img").click(function(){
        var agreement = $(this).attr("src");
        console.log(agreement);
        if(agreement == "images/agree.png"){
            $(this).attr("src","images/disagree.png");
        }else{
            $(this).attr("src","images/agree.png");
        }
    });

    // 选择证件类型
    $("#pickIdType").click(function(){
        $(".pickTypeCover").show();
        $(".pickType ul li").click(function(){
            $("#pickIdType span").text($(this).text());
            $(".pickTypeCover").hide();
        })
    });


    // // 防止下拉,移动端防止页面滚动代码(兼容苹果和安卓)
    // function touchmove(){
    //     document.body.addEventListener('touchmove', function (e) {
    //         e.preventDefault()
    //     }, {passive: false})
    // }

    // // 遮罩层消失之后允许下拉
    // function untouchmove(){
    //     document.body.addEventListener('touchmove', function (e) {
    //         window.event.returnValue = true
    //     })
    // }


    // 场馆申请 //

    
    // 上传资料照片
    // $(".upload1 input").click(function(){
    //     var up_show = $(this).parents(".uploadImg .upload").index();
    //     console.log("上传" + up_show);
    //     $(".uploadImg .upload").eq(up_show).find(".upload2").show();
    // });
    // $(".upDelate").click(function(){
    //     var up_hide = $(this).parents(".uploadImg .upload").index();
    //     console.log("删除" + up_hide)
    //     $(".uploadImg .upload").eq(up_hide).find(".upload2").hide();
    // });

    // function plusReady(){   
    //     // 弹出系统选择按钮框   
    //     mui("body").on("tap",".imageup",function(){   
    //         page.imgUp();   
    //     })   
           
    // };
    // var page=null;   
    // page={   
    //     imgUp:function(){   
    //         var m=this;   
    //         plus.nativeUI.actionSheet({cancel:"取消",buttons:[   
    //             {title:"拍照"},   
    //             {title:"从相册中选择"}   
    //         ]}, function(e){
    //             //1 拍照  2 从相册中选择   
    //             switch(e.index){   
    //                 case 1:
    //                     clickCamera();
    //                     break;   
    //                 case 2:
    //                     clickGallery();
    //                     break;   
    //             }   
    //         });   
    //     }   
    //     //摄像头   
    // };

    // //发送照片 
    // function clickGallery() {   
    //     plus.gallery.pick(function(path) {   
    //         plus.zip.compressImage({   
    //             src: path,   
    //             dst: "_doc/chat/gallery/" + path,   
    //             quality: 20,   
    //             overwrite: true   
    //         }, function(e) {   
    //             var task = plus.uploader.createUpload(server + "upload/chat", {   
    //                 method: "post"   
    //             }, function(t, sta) {   
    //                 console.log(JSON.stringify(t))   
    //                 if(sta == 200) {   
    //                     var msg = t.responseText;   
    //                     var oImg = JSON.parse(msg);   
    //                     var imgUrl = oImg.urls;   
    //                     var re = new RegExp("\\\\", "g");   
    //                     imgUrl = imgUrl.replace(re, "/");   
    //                     console.log(imgUrl)
    //                     uploadMsg(2, imgUrl);   
    //                 }   
    //             });   
    //             task.addFile(e.target, {});   
    //             task.start();   
    //         }, function(err) {   
    //             console.error("压缩失败：" + err.message);   
    //         });   
   
    //     }, function(err) {});   
    // }; 
    // // 拍照   
       
    // function clickCamera() {   
    //     var cmr = plus.camera.getCamera();   
    //     var res = cmr.supportedImageResolutions[0];   
    //     var fmt = cmr.supportedImageFormats[0];   
    //     cmr.captureImage(function(path) {  
    //         plus.io.resolveLocalFileSystemURL(path, function(entry) {   
    //             var localUrl = entry.toLocalURL();   
    //             plus.zip.compressImage({   
    //                 src: localUrl,   
    //                 dst: "_doc/chat/camera/" + localUrl,   
    //                 quality: 20,   
    //                 overwrite: true   
    //             }, function(e) {   
    //                 var task = plus.uploader.createUpload(server + "upload/chat", {   
    //                     method: "post"   
    //                 }, function(t, sta) {   
    //                     if(sta == 200) {   
    //                         var msg = t.responseText;   
    //                         var oImg = JSON.parse(msg);   
    //                         var imgUrl = oImg.urls;   
    //                         var re = new RegExp("\\\\", "g");   
    //                         imgUrl = imgUrl.replace(re, "/");   
    //                         console.log(imgUrl);   
    //                         uploadMsg(2, imgUrl);   
    //                     }   
    //                 });   
    //                 task.addFile(e.target, {});   
    //                 task.start();   
    //             }, function(err) {   
    //                 console.log("压缩失败：  " + err.message);   
    //             });   
    //         });   
    //     }, function(err) {   
    //         console.error("拍照失败：" + err.message);   
    //     }, {   
    //         index: 1   
    //     });   
    // };

    // if(window.plus){   
    //     plusReady();   
    // }else{   
    //     document.addEventListener("plusready",plusReady,false);   
    // } 

})