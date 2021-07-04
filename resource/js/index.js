
var nav = document.getElementsByTagName("nav");
var navList = document.querySelector(".menu-list").children
var css = document.getElementById("css")
var main = document.getElementsByClassName("main");
console.log(main);
function showMenu(){
    nav[0].style.display='inline'
    document.body.style.display="inline"
}



var message=document.getElementById("message");
let first="welcome to my portfolio.";
let second="i'm gonna show you somtings."
let j=1;



var cursor = document.getElementById('cursor');
function blink(){
    if(cursor.style.color!='rgb(0, 0, 0)'){
    cursor.style.color='rgb(0, 0, 0)';

    }else {
        cursor.style.color='rgb(44, 214, 1)';
    }
}




window.setInterval(blink,300);

var clickEvent = (function() {
  if ('ontouchstart' in document.documentElement === true) {
    return 'touchstart';
  } else {
    return 'click';
  }
})();


    message.addEventListener(clickEvent,function(){
            j++;
            if(j==1){
              console.log("1");
            // document.documentElement.requestFullscreen();
            }else if(j==2){
              message.textContent="";
            for(let i =0; i<first.length;i++){
                setTimeout(() => {
                    (message.textContent=message.textContent+first.charAt(i))},90*i );
            }
        }else if(j==3){
          message.textContent="";
            for(let i =0; i<second.length;i++){
                setTimeout(() => {
                  (message.textContent=message.textContent+second.charAt(i))},90*i );
            }
        }else{
          css.setAttribute("href","./resource/css/stylesheet.css")
          message.parentNode.removeChild(message);
          cursor.parentNode.removeChild(cursor);
          showMenu
        }
    })
