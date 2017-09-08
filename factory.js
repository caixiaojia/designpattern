/**
 * Created by shawntsia on 2017/9/8.
 * 工厂相关的模式
 **/


// 简单工厂模式：每次创建，都会返回一个新的对象
var simpleFactory = function(name) {
    var obj  = new Object();
    obj.name

    return obj;
}

// 安全工厂模式：创建一个单例模式，然后每次都调用此实例中的不同方法
var safeFactory = function(type, content) {
    if(this instanceof safeFactory) {
      var s = new this[type] = (content);
      return s;
    } else {
      return new safeFactory(type, content);
    }
}

// 抽象工厂模式：验证传入参数，然后进行寄生式组合继承
var vehicleFactory = funcion(subType, superType) {
    if(typeof vehicleFactory[superType] === 'function') {
      prototype = Object(superType);
      prototype.constructor = subType;
      subType.prototype = prototype;
    } else {
      thro new Error('未创建该抽象类')
    }
}
