// 建造者模式: 基于简单工厂模式的一次升级改造，让属性也需要多样性

var name = function () {

};

var human = function () {

};

var work = function () {

}

var Pserson = function(name, work) {
  var _person = new human();
  _person.name = new name();
  _person.work = new work();
  return _person;
}
