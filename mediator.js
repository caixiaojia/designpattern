/**
 * Created by shawntsia on 2017/9/9.
 * Mediator: 媒婆--中介者模式: 单向通信模式，需要和观察者模式对着来看
 */
var Mediator = (function() {
	var _msg = {};
	return {
		register : function(type, action) {
			if (_msg[type]) {
				_msg[type].push(action);
			} else {
				_msg[type] = [];
				_msg[type].push(action);
			}
		},
		send :function(type) { // send其实就是显示调用的方法，和观察者就差一个取消订阅
			if(_msg[type]) {
				for(var i=0; i<_msg[type].length; i++) {
					_msg[type][i] && _msg[type][i]();
				}
			}
		}
	}
})();

//Test
Mediator.register('demo', function() {
	console.log('first');
});
Mediator.register('demo', function() {
	console.log('second');
});

Mediator.send('demo');
