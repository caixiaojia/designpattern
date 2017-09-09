/**
 * Created by shawntsia on 2017/9/9.
 * command 命令模式, 例如将canvas上下文封装，只提供命令接口进行调用,解决命令发起者和执行者之间的耦合
 */
var viewCommand = (function() {
	// 模版集合
	var tpl = {
		product : [
			'<div>',
				'<img src="{#src#}"/>',
				'<p>{#text#}</p>',
			'</div>'
		].join(''),
		title : [
			'<div class="title">',
				'<div class="main">',
					'<h2>{#title#}</h2>',
					'<p>{#tips#}</p>',
				'</div>',
			'</div>'
		].join('')
	}, html = '';

	// 字符串替换函数
	function formateString(str, obj) {
		return str.replace(/\{#(\w+)#\}/g, function(match, key) {
			return obj[key];
		})
	}
	// 方法集合
	var Action = {
		create : function(data, view) {
			if(data.length) {
				for(var i=0; i<data.length; i++) {
					html += formateString(tpl[view], data[i])
				}
			} else {
				html += formateString(tpl[view], data)
			}
		},
		display : function(container, data, view) {
			if(data) {
				this.create(data, view);
			}
			document.getElementById(container).innerHTML = html;
			html = '';
		}
	};
	return function(msg) {
		msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
		Action[msg.command].apply(Action, msg.param); // 将数组进行参数传入
	}
})();

viewCommand({
	command : 'display',
	param : ['product', prodcutData, 'product']
});