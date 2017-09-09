/**
 * Created by shawntsia on 2017/9/9.
 * 在不暴露内部结构的前提下，可以顺序访问聚合对象内部的元素, 或者向前一步访问
 */

var Iterator = function(items, container) {
	var continer = container && document.getElementById(container) || document,
		items =container.getElementsByTagName(items),
		length = items.length,
		index = 0;
	
	var splice = [].splice;
	return {
		first : function() {
			
		},
		second :function() {
			
		},
		pre : function() {
			if (--index > 0) {
				return items[index];
			} else {
				index = 0;
				return null;
			}
		},
		next : function() {
			if (++index < length) {
				return item[index];
			} else {
				index = length - 1;
				return null;
			}
		},
		get : function(num) {
			// 处理让负数也可以取到值
			index = num >= 0 ? num % length : num % length + length;
			return items[index];
		},
		dealEach : function(fn) {
			var args = splice.call(arguments, 1);
			for(var i = 0; i < length; i++) {
				fn.apply(items[i], args);
			}
		},
		dealItem : function() {
			
		},
		exclusive: function() {
			
		}
	}

};