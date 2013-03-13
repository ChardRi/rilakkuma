// JavaScript Document

window.onload = function() {
  	  var canvas = document.getElementById("rilakkuma");
		  var context = canvas.getContext("2d");
		  drawBody(context);
		  drawShadow(context);
		  drawEarLeft(context);
		  drawEarRight(context);
		  drawHead(context);
		  drawLeftEye(context);
		  drawRightEye(context);
		  drawNose(context);
		  drawMouth(context);
		  drawBeard(context);
		  drawChin(context);
		  drawLeftPalm(context);
		  drawLeftHand(context);
		  drawLeftLeg(context);
		  drawLeftFoot(context);
		  drawRightPalm(context);
	      drawRightHand(context);
		  drawRightLeg(context);
		  drawRightFoot(context);
		  drawBelly(context);
		  drawAss(context);
	 }
  
  	  function drawBody(context){
		  context.save();
		  context.beginPath();
		  context.fillStyle="#cfa149";
		  context.fillRect(68, 150, 110, 130);
		  }
  
	  function drawEarLeft(context){
		  context.save();
		  context.beginPath();
		  context.fillStyle="#cfa149";
		  context.fillRect(40, 30, 40, 40); 
		  var rect = new Rect(4, 1, 70, 30);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(35,30)
		  rect.setTopRightRadius(35,30);
		  rect.draw(context);
		  var rect = new Rect(7, 4, 64, 27);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(32,27)
		  rect.setTopRightRadius(32,27);
		  rect.draw(context);
		  var rect = new Rect(4, 22, 43, 36);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(18,10)
		  rect.setTopRightRadius(25,25);
		  rect.setBottomLeftRadius(28,28);
		  rect.draw(context);
		  var rect = new Rect(7, 25, 38, 30);
		  rect.setFillStyle("#ffeb8c");
		  rect.setTopLeftRadius(15,6)
		  rect.setTopRightRadius(23,24);
		  rect.setBottomLeftRadius(25,24);
		  rect.draw(context);  
		  context.beginPath();
		  context.moveTo(67,17);
		  context.lineTo(66,33);
		  context.lineTo(72,29);
		  context.fillStyle="#b27824";
		  context.fill();
		  context.restore();
		 }
	  
	function drawEarRight(context){
		  context.save();
		  context.beginPath();
		  context.translate(247, 0);
		  context.scale(-1, 1);  
		  context.fillStyle="#cfa149";
		  context.fillRect(40, 30, 40, 40); 
		  var rect = new Rect(4, 1, 70, 30);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(35,30)
		  rect.setTopRightRadius(35,30);
		  rect.draw(context);
		  var rect = new Rect(7, 4, 64, 27);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(32,27)
		  rect.setTopRightRadius(32,27);
		  rect.draw(context);
		  var rect = new Rect(4, 22, 43, 36);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(18,10)
		  rect.setTopRightRadius(25,25);
		  rect.setBottomLeftRadius(28,28);
		  rect.draw(context);
		  var rect = new Rect(7, 25, 38, 30);
		  rect.setFillStyle("#ffeb8c");
		  rect.setTopLeftRadius(15,6)
		  rect.setTopRightRadius(23,24);
		  rect.setBottomLeftRadius(25,24);
		  rect.draw(context);  
		  context.beginPath();
		  context.moveTo(67,17);
		  context.lineTo(66,33);
		  context.lineTo(72,29);
		  context.fillStyle="#b27824";
		  context.fill();	  
		  context.restore();	
		 }
	  
	  function drawHead(context){
		  context.save();
		  context.beginPath();
		  context.rect(28,20, 190, 136);
		  context.closePath();
		  context.clip(); 
		  var rect = new Rect(28, 20, 190, 148);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(85, 74);
		  rect.setTopRightRadius(85, 74);
		  rect.setBottomLeftRadius(85,74);
		  rect.setBottomRightRadius(85,74);
		  rect.draw(context);
		  var rect = new Rect(31, 23, 184, 142);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(82, 71);
		  rect.setTopRightRadius(82, 71);
		  rect.setBottomLeftRadius(82,71);
		  rect.setBottomRightRadius(82,71);
		  rect.draw(context);
		  context.restore();
		 }
	  
	function drawLeftEye(context){
		  context.save();
		  context.beginPath();
		  context.arc(79,103,10,0,Math.PI*2,true);
		  context.fillStyle="#000";
		  context.closePath();
		  context.fill();
		  context.restore();
		 }
	  
	function drawRightEye(context){
		  context.save();
		  context.beginPath();
		  context.arc(167,103,10,0,Math.PI*2,true);
		  context.fillStyle="#000";
		  context.closePath();
		  context.fill();
		  context.restore();
		 }
	  
	function drawNose(context){
		  context.save();
		  context.beginPath();
		  var rect = new Rect(96, 97, 52, 42);
		  rect.setFillStyle("#fff");
		  rect.setTopLeftRadius(26, 21);
		  rect.setTopRightRadius(26, 21);
		  rect.setBottomLeftRadius(26,21);
		  rect.setBottomRightRadius(26,21);
		  rect.draw(context);
		  context.restore();
	     }
	 
	function drawMouth(context){
		  context.save();
		  context.beginPath();
		  context.arc(122,115,7,0,Math.PI*2,true);
		  context.fillStyle="#000";
		  context.closePath();
		  context.fill();
		  context.restore();
	     }
	  
	function drawBeard(context){
		  context.save();
		  context.beginPath();
		  context.lineWidth = '4';
		  context.strokeStyle = '#000';
		  context.moveTo(119,121);
		  context.lineTo(113,131);
		  context.moveTo(125,121);
		  context.lineTo(131,131);
		  context.stroke();
		  context.restore();
	 	 }  
	  
    function drawChin(context){
		  context.save();
		  context.beginPath();
		  var rect = new Rect(73, 156, 100, 10);
		  rect.setFillStyle("#b27824");
		  rect.setBottomLeftRadius(50,11);
		  rect.setBottomRightRadius(50,11);
		  rect.draw(context);
		  var rect = new Rect(73, 156, 50, 6);
		  rect.setFillStyle("#cfa149");
		  rect.setBottomLeftRadius(25,6);
		  rect.setBottomRightRadius(25,6);
		  rect.draw(context);
		  var rect = new Rect(123, 156, 50, 6);
		  rect.setFillStyle("#cfa149");
		  rect.setBottomLeftRadius(25,6);
		  rect.setBottomRightRadius(25,6);
		  rect.draw(context);
		  context.restore();
		 }
	  
	function drawLeftHand(context){
		  context.save();
		  context.beginPath();
		  context.translate(52,150); 
		  context.rotate(Math.PI*2/36);  
		  var rect = new Rect(0, 1, 25, 70);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(25,70);
		  rect.draw(context);
		  var rect = new Rect(3, 0, 23, 72);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(22,70);
		  rect.draw(context);
		  context.restore();
		}
		
	function drawRightHand(context){
		  context.save();
		  context.beginPath();
		  context.translate(247, 0);
		  context.scale(-1, 1);  
		  context.translate(52,150); 
		  context.rotate(Math.PI*2/36);  
		  var rect = new Rect(0, 1, 25, 70);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(25,70);
		  rect.draw(context);
		  var rect = new Rect(3, 0, 23, 72);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(22,70);
		  rect.draw(context);
		  context.restore();
		}
		
	function drawLeftPalm(context){
		  context.save();
		  context.beginPath();
		  context.translate(63,239); 
		  context.rotate(Math.PI*39/36);  
		  var rect = new Rect(0, 0, 30, 15);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(15,15);
		  rect.setTopRightRadius(15,15);
		  rect.draw(context);
		  var rect = new Rect(0, 3, 30, 15);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(15,14);
		  rect.setTopRightRadius(15,14);
		  rect.draw(context);
		  context.restore();
		}
		
	function drawRightPalm(context){
		  context.save();
		  context.beginPath();
		  context.translate(247, 0);
		  context.scale(-1, 1);  
		  context.translate(63,239); 
		  context.rotate(Math.PI*39/36);  
		  var rect = new Rect(0, 0, 30, 15);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(15,15);
		  rect.setTopRightRadius(15,15);
		  rect.draw(context);
		  var rect = new Rect(0, 3, 30, 15);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(15,14);
		  rect.setTopRightRadius(15,14);
		  rect.draw(context);
		  context.restore();
		}
	
	function drawLeftLeg(context){
		  context.save();
		  context.beginPath();
		  context.translate(58,173); 
		  context.rotate(Math.PI*0/36);  
		  var rect = new Rect(0, 2, 20, 110);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(20,110);
		  rect.draw(context);
		  var rect = new Rect(3, 0, 18, 112);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(17,110);
		  rect.draw(context);
		  context.restore();
		}
			
	function drawRightLeg(context){
		  context.save();
		  context.beginPath();
		  context.translate(247, 0);
		  context.scale(-1, 1);  
		  context.translate(58,173); 
		  context.rotate(Math.PI*0/36);  
		  var rect = new Rect(0, 2, 20, 110);
		  rect.setFillStyle("#000");
		  rect.setTopLeftRadius(20,110);
		  rect.draw(context);
		  var rect = new Rect(3, 0, 18, 112);
		  rect.setFillStyle("#cfa149");
		  rect.setTopLeftRadius(17,110);
		  rect.draw(context);
		  context.restore();
		}
			
	function drawLeftFoot(context){
		  context.save();
		  context.beginPath();
		  var rect = new Rect(58, 280, 40, 22);
		  rect.setFillStyle("#000");
		  rect.setBottomLeftRadius(24,10);
	      rect.setBottomRightRadius(14,14);
		  rect.draw(context);
	      var rect = new Rect(61, 278, 35, 21);
		  rect.setFillStyle("#cfa149");
		  rect.setBottomLeftRadius(22,8);
		  rect.setBottomRightRadius(12,12);
		  rect.draw(context); 
		  context.restore();
		}
		
	function drawRightFoot(context){
		  context.save();
		  context.beginPath();
		  context.translate(247, 0);
		  context.scale(-1, 1);  
		  var rect = new Rect(58, 280, 40, 22);
		  rect.setFillStyle("#000");
		  rect.setBottomLeftRadius(24,10);
	      rect.setBottomRightRadius(14,14);
		  rect.draw(context);
	      var rect = new Rect(61, 278, 35, 21);
		  rect.setFillStyle("#cfa149");
		  rect.setBottomLeftRadius(22,8);
		  rect.setBottomRightRadius(12,12);
		  rect.draw(context); 
		  context.restore();
		}
		
	function drawBelly(context){
		  context.save();
		  context.beginPath();
		  var rect = new Rect(84, 175, 80, 90);
		  rect.setFillStyle("#fff");
		  rect.setTopLeftRadius(40, 45);
		  rect.setTopRightRadius(40, 45);
		  rect.setBottomLeftRadius(40, 45);
		  rect.setBottomRightRadius(40, 45);
		  rect.draw(context);
		  context.restore();
		}
		  
	function drawAss(context){
		  context.save();
		  context.beginPath();
		  var rect = new Rect(97, 280, 54, 5);
		  rect.setFillStyle("#000");
		  rect.setBottomLeftRadius(28,4);
		  rect.setBottomRightRadius(28,4);
		  rect.draw(context);
		  var rect = new Rect(98, 280, 52, 3);
		  rect.setFillStyle("#cfa149");
		  rect.setBottomLeftRadius(28,4);
		  rect.setBottomRightRadius(28,4);
		  rect.draw(context);
		  context.restore();
		}
		
	function drawShadow(context){
		  context.save();
		  context.beginPath();
		  var rect = new Rect(49, 290, 150, 20);
		  rect.setFillStyle("#c4903a");
		  rect.setTopLeftRadius(75, 10);
		  rect.setTopRightRadius(75, 10);
		  rect.setBottomLeftRadius(75, 10);
		  rect.setBottomRightRadius(75, 10);
		  rect.draw(context);
		  context.restore();	
		}
