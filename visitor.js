/**
 * Created by shawntsia on 2017/9/9.
 * visitor 访问者模式: 针对对象， 在不改变对象的钱提现，访问对象中的新方法
 * 解决数据与数据之间的耦合, 将对象里面的操作用更有好的api进行封装
 */

var Visitor = (function() {
	return {
		splice : function() {
			var args = Array.prototype.splice.call(arguments, 1);
			return Array.prototype.splice.apply(args[0], args);
		},
		push : function() {
			var len = arguments[0].length || 0;
			var args = this.splice(arguments, 1);
			arguments[0].length = len + arguments.length - 1;
			return Array.prototype.push(arguments[0], args);
		},
		pop : function() {
			return Array.prototype.pop.apply(arguments[0])
		}
	}
})();

var a = new Object();
console.log(a.length);
Visitor.push(a, 1, 3, 4, 5);
console.log(a.length);
Visitor.push(a, 4, 5, 6);
