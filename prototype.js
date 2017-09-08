// 原型模式: 就是简单的原型模式

var obj = function(name, container) {
  this.name = name;
  this.container = container;
}

obj.prototype = {
    setName: function(name) {
      this.name = name;
    }
}
