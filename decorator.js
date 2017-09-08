// 装饰者模式

// 再不修改对方原对象的基础上，进行拓展，例如原本执行一个回掉函数，我们可以在执行的后面再紧接着执行第二个回调函数

var decorator = function(input, fn) {
  var input = document.getElementById(input);
  if(typeof input.onclick === 'function') {
    var oldClickFn = input.onclick;
    input.onclick = function() {
      oldClickFn()
      fu();
    }
  } else {
    input.onclick = fn;
  }
}
