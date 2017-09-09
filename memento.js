/**
 * Created by shawntsia on 2017/9/9.
 * Memento 备忘录模式
 */

// 做个闭包存放缓存数据，然后每次调用时候进行判断，如果存在则返回，如果不存在则进行拉去，其实这是典型的后段redis模式
var Page = function() {
	var cache = {};
	return function(page, fn) {
		if(cache[page]) {
			showPage(page, cache[page]);
			fn && fn();
		} else {
			$.post('url', {
			}, function() {
				cache[page] = res.data;
			})
		}
	}
};