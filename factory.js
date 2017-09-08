/**
 * Created by shawntsia on 2017/9/8.
 * 工厂相关的模式
 **/


// 简单工厂模式：每次创建，都会返回一个新的对象
var simpleFactory = function(name) {
    var obj  = new Object();
    obj.name = name;
    return obj;
}

// 安全工厂模式：创建一个单例模式，然后每次都调用此实例中的不同实例化的类
var safeFactory = function(type, arg) {
    if(this instanceof safeFactory) {
      var s = new this[type](arg); // 实例化prototype里面的类
      return s;
    } else {
      return new safeFactory(type, arg); // 实例化safefactory本身
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
