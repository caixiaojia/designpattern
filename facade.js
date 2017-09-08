// 外观模式: facade模式，一般来说prototype常用这种模式

var A = {
  g: function(id) {
    return document.getElementById(id);
  }
};
