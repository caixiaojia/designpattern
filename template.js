// 模版方法：一个组件对象，有一些常用的函数
var alert = function (data) {
  if (!data) return;
  this.attr = data.attr;
}

alert.prototype = {
  init : function() {

  },
  bindEvent: function() {

  },
  hide: function() {

  },
  show: function() {

  }
}
