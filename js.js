
  var contain = document.getElementById("container");
  var box = document.getElementById("playBox");
  var board = document.getElementsByClassName("board")[0];
  var ball = document.getElementsByClassName("ball")[0];
  var btn = document.getElementsByTagName("button")[0];
  var score = document.getElementsByClassName("score")[0];
  var board_left,board_top,ball_left,ball_top ;
  var interval,flag=1,sum=0; 
  
  var speedX = -1,speedY = -1;
   
   box.onmousemove = function() {
    var e = event || window.event; 
    board_left = event.pageX - box.offsetLeft -50;
    board_top = event.pageY - box.offsetTop;  
    
    if(board_left>=0 && board_left<=400) {
      board.style.left = board_left + "px";
      if(flag) {
        ball_left = board_left + 45;
        ball.style.left = ball_left + "px";
      }  
    }  
    if(board_top>=0 && board_top<=390){
      board.style.top =  board_top + "px";
      if(flag) {
        ball_top = board_top - 15;
        ball.style.top = ball_top +"px";
      }
   } 
   
  }
  
  btn.onclick = function() {
    clearInterval(interval);
    flag=0;
    interval =  setInterval(function(){   
      ball_left += speedX;
      ball_top += speedY;

      if(ball_left>=0 && ball_left<=485){
        ball.style.left = ball_left + "px";
      }
      if(ball_top>=0 && ball_top<=385){
        ball.style.top = ball_top + "px";
      }

      if(ball_left<0|| ball_left>485 ){
        speedX = -speedX;  
      }else if(ball_top<0){
        speedY = -speedY; 
      }  
     
      if((ball_top+15) >= board_top && ball_left>=board_left && ball_left <= (board_left+50)){
        speedX = -speedX; 
        speedY = -speedY;
        sum+=5;
        score.innerHTML = sum;

      }
      if(ball_top>385 ){
        alert("Game over please refresh to restart!");
        clearInterval(interval);
      }
    },5)    
  }
