// 状态模式，存在状态的切换，状态之间可能操作同一个对象，适合多种if，else情况，一般来说只返回this，不返回结果，改变内部状态。

var ResultState = (function() {
	var State = {
		state0: function() {
			return this; // 支持链式操作
		},
		state1: function() {
			return this; // 支持链式操作
		},
		state2: function() {
			return this;
		}
	}
	function show(result) {
		return State['state' + result] && State['state' + result]()
	}
	return {
		show : show
	}
})();
