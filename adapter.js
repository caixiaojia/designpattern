// 适配器模式
// 相同api和数据转换适配
var A = A || {};

A.g = function(id) {
  return B.g(id);
}
