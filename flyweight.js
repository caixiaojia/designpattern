// 享元模式

// 享元对象: 将数据结构进行分离，然后每次都以进行创建

var FlayWightObj = function() {
  var created = [];
  funtion create() {
    return dom;
  }
  returmn {
    getDiv: function() {

    }
  }
}


// 享元动作：将动作进行分离，每次都可以进行共享

var FlyWightMethod = {
  moveX: function(x) {
    this.x = x;
  },
  moveY: function(y) {
    this.y = y;
  }
}

child.prototype = FlyWightMethod; // 继承之后就拥有了所有的动作
