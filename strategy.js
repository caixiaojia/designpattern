// 策略模式, 返回结果
var PriceStrategy = function() {
	var stragtegy = {
		return20: function(price) {
			return +price + parseInt(price / 100) * 30;
		},
		return30: function(price) {
			return +price + parseInt(price / 100) * 30;
		}
	}

	return function(algorithm, price) {
		return stragtegy[algorithm] && stragtegy[algorithm](price);
	}
}
