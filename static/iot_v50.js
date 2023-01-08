/*
document.getElementById("language_english").onclick = function(e) {
    if(first_view_en)
    {
        this.innerHTML ="第一人称视角:打开";
    }else{
        this.innerHTML ="第一人称视角:关闭";
    }
    alert("tuyuy");
}
*/

var btn = document.getElementById('post_message');
var message = document.getElementById('message_box');
btn.onclick = function(){
            var xhr = new XMLHttpRequest();
            var messageValue = message.value;
            var params = 'txt_message=' + messageValue;
            xhr.open('post', 'text_message');
            // 设置请求报文的报文头信息
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.send(params); // 注意这里要填请求参数
            // 获取服务器端响应的数据
            xhr.onload = function() {
                    console.log(xhr.responseText)
                                    }
                        }

$(function(){
       $("button").click(function(){
         if (this.id == 'lightspoton') {
           $.post("/lightspoton",this.id,function(data,status){});
          }
         if (this.id == 'lightspotoff') {
           $.post("/lightspotoff",this.id,function(data,status){});
          }
         if (this.id == 'lampon') {
           $.post("/lampon",this.id,function(data,status){});
          }
         if (this.id == 'lampoff') {
           $.post("/lampoff",this.id,function(data,status){});
          }
         if (this.id == 'camleft') {
           $.post("/camleft",this.id,function(data,status){});
          }
         if (this.id == 'camright') {
           $.post("/camright",this.id,function(data,status){});
          }
         if (this.id == 'camup') {
           $.post("/camup",this.id,function(data,status){});
          }
         if (this.id == 'camdown') {
           $.post("/camdown",this.id,function(data,status){});
          }
         if (this.id == 'trolleyforward') {
           $.post("/trolleyforward",this.id,function(data,status){});
          }
         if (this.id == 'trolleybackward') {
           $.post("/trolleybackward",this.id,function(data,status){});
          }
         if (this.id == 'trolleyleft') {
           $.post("/trolleyleft",this.id,function(data,status){});
          }
         if (this.id == 'trolleyright') {
           $.post("/trolleyright",this.id,function(data,status){});
          }
         if (this.id == 'platformc') {
           $.post("/platformc",this.id,function(data,status){});
          }
         if (this.id == 'platformcc') {
           $.post("/platformcc",this.id,function(data,status){});
          }
         if (this.id == 'camstop') {
           $.post("/camoff","camoff",function(data,status){});
          }
         if (this.id == 'trolleystop') {
           $.post("/trolleyoff","trolleyoff",function(data,status){});
          }
         if (this.id == 'platformstop') {
           $.post("/platformoff","platformoff",function(data,status){});
          }
        });
     });

    $(function(){
       $("button").mousedown(function(){
         if (this.id == 'camleft_pc') {
           $.post("/camleft",this.id,function(data,status){});
          }
         if (this.id == 'camright_pc') {
           $.post("/camright",this.id,function(data,status){});
          }
         if (this.id == 'camup_pc') {
           $.post("/camup",this.id,function(data,status){});
          }
         if (this.id == 'camdown_pc') {
           $.post("/camdown",this.id,function(data,status){});
          }
         if (this.id == 'trolleyforward_pc') {
           $.post("/trolleyforward",this.id,function(data,status){});
          }
         if (this.id == 'trolleybackward_pc') {
           $.post("/trolleybackward",this.id,function(data,status){});
          }
         if (this.id == 'trolleyleft_pc') {
           $.post("/trolleyleft",this.id,function(data,status){});
          }
         if (this.id == 'trolleyright_pc') {
           $.post("/trolleyright",this.id,function(data,status){});
          }
         if (this.id == 'platformc_pc') {
           $.post("/platformc",this.id,function(data,status){});
          }
         if (this.id == 'platformcc_pc') {
           $.post("/platformcc",this.id,function(data,status){});
          }
        });
     });

    $(function(){
       $("button").mouseup(function(){
         if (this.id == 'camleft_pc') {
           $.post("/camoff","camoff",function(data,status){});
          }
         if (this.id == 'camright_pc') {
           $.post("/camoff","camoff",function(data,status){});
          }
         if (this.id == 'camup_pc') {
           $.post("/camoff","camoff",function(data,status){});
          }
         if (this.id == 'camdown_pc') {
           $.post("/camoff","camoff",function(data,status){});
          }
         if (this.id == 'trolleyforward_pc') {
           $.post("/trolleyoff","trolleyoff",function(data,status){});
          }
         if (this.id == 'trolleybackward_pc') {
           $.post("/trolleyoff","trolleyoff",function(data,status){});
          }
         if (this.id == 'trolleyleft_pc') {
           $.post("/trolleyoff","trolleyoff",function(data,status){});
          }
         if (this.id == 'trolleyright_pc') {
           $.post("/trolleyoff","trolleyoff",function(data,status){});
          }
         if (this.id == 'platformc_pc') {
           $.post("/platformoff","platformoff",function(data,status){});
          }
         if (this.id == 'platformcc_pc') {
           $.post("/platformoff","platformoff",function(data,status){});
          }
        });
     });

var x = document.getElementById("sidebar_right_general");
  {
    x.style.display = "block";
  }
  var x = document.getElementById("sidebar_right_pc");
  {
    x.style.display = "none";
  }
  var x = document.getElementById("side_cam");
  {
    x.style.display = "block";
  }
  var x = document.getElementById("follow_up_cam");
  {
    x.style.display = "none";
  }

function side_camera_Function()
{
  var x = document.getElementById("side_cam");
  {
    x.style.display = "block";
  }
  var x = document.getElementById("follow_up_cam");
  {
    x.style.display = "none";
  }
}

function sidebar_right_general_Function()
{
  var x = document.getElementById("sidebar_right_general");
  {
    x.style.display = "block";
  }
  var x = document.getElementById("sidebar_right_pc");
  {
    x.style.display = "none";
  }
}

function sidebar_right_pc_Function()
{
  var x = document.getElementById("sidebar_right_general");
  {
    x.style.display = "none";
  }
  var x = document.getElementById("sidebar_right_pc");
  {
    x.style.display = "block";
  }
}

function moving_camera_Function()
{
  var x = document.getElementById("side_cam");
  {
    x.style.display = "none";
  }
  var x = document.getElementById("follow_up_cam");
  {
    x.style.display = "block";
  }
}

document.getElementById("language_chinese").onclick = function() {
    document.getElementById("exit_page_1").innerText ="安全退出页面";
    document.getElementById("exit_page_2").innerText ="安全退出页面";
    document.getElementById("exit_page_3").innerText ="安全退出页面";
    document.getElementById("exit_page_4").innerText ="安全退出页面";

    document.getElementById("side").innerText ="侧面";
    document.getElementById("moving").innerText ="随动";
    document.getElementById("general").innerText ="通行界面";
    document.getElementById("pc").innerText ="PC界面";

    document.getElementById("text_camera_1").innerText ="摄像头";
    document.getElementById("text_camera_2").innerText ="摄像头";
    document.getElementById("text_camera_3").innerText ="摄像头";
    document.getElementById("text_camera_4").innerText ="摄像头";

    document.getElementById("text_camera_p_1").innerText ="摄像头平台";
    document.getElementById("text_camera_p_2").innerText ="摄像头平台";
    document.getElementById("text_camera_p_3").innerText ="摄像头平台";
    document.getElementById("text_camera_p_4").innerText ="摄像头平台";

    document.getElementById("text_object_m_1").innerText ="物件控制";
    document.getElementById("text_object_m_2").innerText ="物件控制";
    document.getElementById("text_object_m_3").innerText ="物件控制";
    document.getElementById("text_object_m_4").innerText ="物件控制";

    document.getElementById("text_h_lighter_1").innerText ="高亮笔";
    document.getElementById("text_h_lighter_2").innerText ="高亮笔";
    document.getElementById("text_h_lighter_3").innerText ="高亮笔";
    document.getElementById("text_h_lighter_4").innerText ="高亮笔";

    document.getElementById("text_lighters_1").innerText ="照明灯";
    document.getElementById("text_lighters_2").innerText ="照明灯";
    document.getElementById("text_lighters_3").innerText ="照明灯";
    document.getElementById("text_lighters_4").innerText ="照明灯";

    document.getElementById("text_heater_1").innerText ="电热炉";
    document.getElementById("text_heater_2").innerText ="电热炉";
    document.getElementById("text_heater_3").innerText ="电热炉";
    document.getElementById("text_heater_4").innerText ="电热炉";

    document.getElementById("text_delivery_1").innerText ="运输带";
    document.getElementById("text_delivery_2").innerText ="运输带";
    document.getElementById("text_delivery_3").innerText ="运输带";
    document.getElementById("text_delivery_4").innerText ="运输带";
}

document.getElementById("language_english").onclick = function() {
    document.getElementById("exit_page_1").innerText ="Exit the page safely";
    document.getElementById("exit_page_2").innerText ="Exit the page safely";
    document.getElementById("exit_page_3").innerText ="Exit the page safely";
    document.getElementById("exit_page_4").innerText ="Exit the page safely";

    document.getElementById("side").innerText ="SIDE";
    document.getElementById("moving").innerText ="MOVING";
    document.getElementById("general").innerText ="GENERAL";
    document.getElementById("pc").innerText ="PC";

    document.getElementById("text_camera_1").innerText ="CAMERA";
    document.getElementById("text_camera_2").innerText ="CAMERA";
    document.getElementById("text_camera_3").innerText ="CAMERA";
    document.getElementById("text_camera_4").innerText ="CAMERA";

    document.getElementById("text_camera_p_1").innerText ="CAMERA PLATFORM";
    document.getElementById("text_camera_p_2").innerText ="CAMERA PLATFORM";
    document.getElementById("text_camera_p_3").innerText ="CAMERA PLATFORM";
    document.getElementById("text_camera_p_4").innerText ="CAMERA PLATFORM";

    document.getElementById("text_object_m_1").innerText ="OBJECT MOVEMENT";
    document.getElementById("text_object_m_2").innerText ="OBJECT MOVEMENT";
    document.getElementById("text_object_m_3").innerText ="OBJECT MOVEMENT";
    document.getElementById("text_object_m_4").innerText ="OBJECT MOVEMENT";

    document.getElementById("text_h_lighter_1").innerText ="H/LIGHTER";
    document.getElementById("text_h_lighter_2").innerText ="H/LIGHTER";
    document.getElementById("text_h_lighter_3").innerText ="H/LIGHTER";
    document.getElementById("text_h_lighter_4").innerText ="H/LIGHTER";

    document.getElementById("text_lighters_1").innerText ="LIGHTERS";
    document.getElementById("text_lighters_2").innerText ="LIGHTERS";
    document.getElementById("text_lighters_3").innerText ="LIGHTERS";
    document.getElementById("text_lighters_4").innerText ="LIGHTERS";

    document.getElementById("text_heater_1").innerText ="HEATER";
    document.getElementById("text_heater_2").innerText ="HEATER";
    document.getElementById("text_heater_3").innerText ="HEATER";
    document.getElementById("text_heater_4").innerText ="HEATER";

    document.getElementById("text_delivery_1").innerText ="DELIVERY";
    document.getElementById("text_delivery_2").innerText ="DELIVERY";
    document.getElementById("text_delivery_3").innerText ="DELIVERY";
    document.getElementById("text_delivery_4").innerText ="DELIVERY";
}
