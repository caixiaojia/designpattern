// 单例模式，最常用的框架基准模式
var obj = (function() {

    return {

    };
})();

// 惰性单例模式
var lazyObj = (function() {

  var _instance = null;
  function single() {
    return {

    }
  }

  return function() {
    if(!_instance) {
      _instance = single();
    }
    return _instance;
  }
})();
