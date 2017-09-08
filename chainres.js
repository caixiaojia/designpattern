// 职责链模式: 将复杂模块进行分解调用
var sendData = function() {
	dealData();
}

var dealData = function() {
	createSlug();
}

var createSlug = function() {

}
