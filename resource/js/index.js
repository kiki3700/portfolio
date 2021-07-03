var message=document.getElementById("message");





let first="welcome to my portfolio.";
let second="i gonna show you somtings."
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

var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById( 'canvas2' ),
    ctx2 = canvas2.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    maxCharCount = 100,
    fallingCharArr = [],
    fontSize = 15,
    maxColums = cw/(fontSize);

    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;


    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function(ctx){

      this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
      this.speed = randomFloat(1,5);


      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize+"Subway Ticker Grid";
      ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize+"Subway Ticker Grid";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(2,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
      fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

      var i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
      }

      requestAnimationFrame(update);
    }

    document.body.addEventListener("click",function(){
            j++;
            console.log(j)
            if(j==1){
              j--;
            document.documentElement.requestFullscreen();
            j++;
            }else if(j==2){
              j--;
            for(let i =0; i<first.length;i++){
                
                message.textContent="";
                setTimeout(() => {
                    (message.append(first.charAt(i)))},100*i);
            }
            j++;
        }else if(j==3){
          j--;
            for(let i =0; i<second.length;i++){
                message.textContent="";
                setTimeout(() => {
                    (message.append(second.charAt(i)))},100*i);
            }
            j++
        }else if(j==4){
            update();
        }else if(j==5){
          location.href="main.html"
        }
    })