//根据四个角画不规则图片
var Rect = function(left, top, width, height) {
  this.left = left;
  this.top = top;
  this.width = width;
  this.height = height;
  this.pathA = {
    x : left,
    y : top
  };
  this.pathB = {
    x : left,
    y : top
  };
  this.pathC = {
    x : left + width,
    y : top
  };
  this.pathD = {
    x : left + width,
    y : top
  };
  this.pathE = {
    x : left + width,
    y : top + height
  };
  this.pathF = {
    x : left + width,
    y : top + height
  };
  this.pathG = {
    x : left,
    y : top + height
  };
  this.pathH = {
    x : left,
    y : top + height
  };
  this.tlrFlag = false;
  this.trrFlag = false;
  this.brrFlag = false;
  this.blrFlag = false;
};
Rect.prototype = {
  setFillStyle : function(color) {
    this.fillStyle = color;
  },
  setTopLeftRadius : function(a, b) {
    if(a == 0 && b == 0) {
      return;
    }
    this.tlrFlag = true;
    this.topleftA = a;
    this.topleftB = b;
  },
  setTopRightRadius : function(a, b) {
    if(a == 0 && b == 0) {
      return;
    }
    this.trrFlag = true;
    this.topRightA = a;
    this.topRightB = b;
  },
  setBottomLeftRadius : function(a, b) {
    if(a == 0 && b == 0) {
      return;
    }
    this.blrFlag = true;
    this.bottomLeftA = a;
    this.bottomLeftB = b;
  },
  setBottomRightRadius : function(a, b) {
    if(a == 0 && b == 0) {
      return;
    }
    this.brrFlag = true;
    this.bottomRightA = a;
    this.bottomRightB = b;
  },
  draw : function(context) {
    context.fillStyle = this.fillStyle;
    context.beginPath();
    if(this.tlrFlag) {
      bezierRadius(context, this, this.left + this.topleftA, this.top + this.topleftB, this.topleftA, this.topleftB, "topleft");
    }
    if(this.trrFlag) {
      bezierRadius(context, this, this.left + this.width - this.topRightA, this.top + this.topRightB, this.topRightA, this.topRightB, "topright");
    }
    if(this.blrFlag) {
      bezierRadius(context, this, this.left + this.bottomLeftA, this.top + this.height - this.bottomLeftB, this.bottomLeftA, this.bottomLeftB, "bottomleft");
    }
    if(this.brrFlag) {
      bezierRadius(context, this, this.left + this.width - this.bottomRightA, this.top + this.height - this.bottomRightB, this.bottomRightA, this.bottomRightB, "bottomright");
    }
    context.moveTo(this.pathA.x, this.pathA.y);
    context.lineTo(this.pathB.x, this.pathB.y);
    context.lineTo(this.pathC.x, this.pathC.y);
    context.lineTo(this.pathD.x, this.pathD.y);
    context.lineTo(this.pathE.x, this.pathE.y);
    context.lineTo(this.pathF.x, this.pathF.y);
    context.lineTo(this.pathG.x, this.pathG.y);
    context.lineTo(this.pathH.x, this.pathH.y);
    context.closePath();
    context.fill();
  }
}

//---------使用三次贝塞尔曲线模拟椭圆2---------------------
function bezierRadius(ctx, _this, x, y, a, b, type) {
  var k = 0.5522848, ox = a * k, // 水平控制点偏移量
  oy = b * k;
  // 垂直控制点偏移量

  //从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
  if ("topleft" == type) {
    ctx.moveTo(x - a, y);
    ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
    _this.pathA = {
      x : x - a,
      y : y
    };
    _this.pathB = {
      x : x,
      y : y - b
    };
  }
  if ("topright" == type) {
    ctx.moveTo(x, y - b);
    ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
    _this.pathC = {
      x : x,
      y : y - b
    };
    _this.pathD = {
      x : x + a,
      y : y
    };
  }
  if ("bottomright" == type) {
    ctx.moveTo(x + a, y);
    ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
    _this.pathE = {
      x : x + a,
      y : y
    };
    _this.pathF = {
      x : x,
      y : y + b
    };
  }
  if ("bottomleft" == type) {
    ctx.moveTo(x, y + b);
    ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
    _this.pathG = {
      x : x,
      y : y + b
    };
    _this.pathH = {
      x : x - a,
      y : y
    };
  }
};  
