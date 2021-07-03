var message=document.getElementById("message");




let first="welcome to my portfolio.";
let second="i'm gonna show you somtings."
let j=0;
console.log(message.textContent);


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


    document.body.addEventListener(clickEvent,function(){
            j++;
            console.log(j)
            if(j==1){
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
        }else if(j==4){
          
          location.href="main.html"
        }
    })
